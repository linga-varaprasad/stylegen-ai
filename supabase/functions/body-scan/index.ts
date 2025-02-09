
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"
import { createSupabaseClient } from "../_shared/supabase-client.ts"

const BODYGRAM_API_KEY = Deno.env.get('BODYGRAM_API_KEY')
const BODYGRAM_API_URL = 'https://api.bodygram.com/v1'

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabase = createSupabaseClient()
    const { data: { user } } = await supabase.auth.getUser(
      req.headers.get('Authorization')?.split(' ')[1] ?? ''
    )
    
    if (!user) {
      throw new Error('Unauthorized')
    }

    const { image_data } = await req.json()
    
    // Create a new scan record
    const { data: scan, error: scanError } = await supabase
      .from('body_scans')
      .insert({
        user_id: user.id,
        status: 'processing'
      })
      .select()
      .single()

    if (scanError) throw scanError

    // Call Bodygram API to process the scan
    const bodygramResponse = await fetch(`${BODYGRAM_API_URL}/measurements`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${BODYGRAM_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: image_data,
        scan_id: scan.id
      })
    })

    if (!bodygramResponse.ok) {
      throw new Error(`Bodygram API error: ${await bodygramResponse.text()}`)
    }

    const measurements = await bodygramResponse.json()
    console.log('Bodygram measurements:', measurements)

    // Update scan with measurements
    const { error: updateError } = await supabase
      .from('body_scans')
      .update({
        status: 'completed',
        measurements: measurements
      })
      .eq('id', scan.id)

    if (updateError) throw updateError

    // Store measurements in body_measurements table
    const { error: measurementsError } = await supabase
      .from('body_measurements')
      .upsert({
        user_id: user.id,
        height: measurements.height,
        weight: measurements.weight,
        body_shape: measurements.body_shape,
        fit_preferences: {
          top_size: measurements.top_size,
          bottom_size: measurements.bottom_size,
          shoe_size: measurements.shoe_size
        }
      })

    if (measurementsError) throw measurementsError

    return new Response(
      JSON.stringify({
        scan_id: scan.id,
        measurements,
        status: 'completed'
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in body-scan function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    )
  }
})
