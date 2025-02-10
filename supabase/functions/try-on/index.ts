
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"
import { createSupabaseClient } from "../_shared/supabase-client.ts"

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { outfit_image, user_id } = await req.json()
    const supabase = createSupabaseClient()
    
    // Create a new try-on record
    const { data: tryOn, error: insertError } = await supabase
      .from('outfit_tryons')
      .insert({
        user_id,
        outfit_image,
        status: 'processing'
      })
      .select()
      .single()

    if (insertError) throw insertError

    // Mock AR processing delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Mock rendered image (in production this would come from Snapchat/DeepAR API)
    const mockRenderedImage = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
    
    // Update the try-on record with the result
    const { error: updateError } = await supabase
      .from('outfit_tryons')
      .update({
        rendered_image: mockRenderedImage,
        status: 'completed'
      })
      .eq('id', tryOn.id)

    if (updateError) throw updateError

    return new Response(
      JSON.stringify({
        id: tryOn.id,
        rendered_image: mockRenderedImage,
        status: 'completed'
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in try-on function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    )
  }
})
