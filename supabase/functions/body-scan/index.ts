
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { image_data } = await req.json()
    
    // Here we'll integrate with Bodygram/Neatsy AI
    // For now, return a mock response
    const mockMeasurements = {
      height: 175,
      weight: 70,
      chest: 95,
      waist: 80,
      hips: 95
    }

    return new Response(
      JSON.stringify({
        measurements: mockMeasurements,
        status: 'completed'
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      },
    )
  }
})
