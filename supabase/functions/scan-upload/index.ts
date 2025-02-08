
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from '@supabase/supabase-js'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { data: { user } } = await supabase.auth.getUser(req.headers.get('Authorization')?.split(' ')[1] ?? '')
    
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const formData = await req.formData()
    const file = formData.get('scan')

    if (!file) {
      return new Response(
        JSON.stringify({ error: 'No scan file provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Upload scan to storage
    const timestamp = new Date().toISOString()
    const filePath = `${user.id}/scans/${timestamp}-scan.jpg`
    
    const { error: uploadError } = await supabase
      .storage
      .from('user-uploads')
      .upload(filePath, file)

    if (uploadError) throw uploadError

    // Process scan and extract measurements
    const measurements = await processScan(file)

    // Store measurements in database
    const { data: storedMeasurements, error: measurementsError } = await supabase
      .from('body_measurements')
      .upsert({
        user_id: user.id,
        ...measurements,
        updated_at: new Date().toISOString()
      })
      .select()
      .single()

    if (measurementsError) throw measurementsError

    return new Response(
      JSON.stringify(storedMeasurements),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

async function processScan(file: File) {
  // This is a placeholder for the actual scan processing logic
  // In a real implementation, this would use computer vision and AI to extract measurements
  return {
    height: 175,
    weight: 70,
    body_shape: 'rectangle',
    fit_preferences: {
      top_size: 'M',
      bottom_size: '32',
      shoe_size: '10'
    }
  }
}
