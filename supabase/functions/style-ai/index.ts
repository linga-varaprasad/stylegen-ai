
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "../_shared/cors.ts"

const openAIApiKey = Deno.env.get('OPENAI_API_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { user_preferences, measurements } = await req.json()
    
    console.log('Received request with preferences:', user_preferences)
    console.log('User measurements:', measurements)

    // Call GPT-4 Vision API for style recommendations
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a personal fashion stylist AI. Generate outfit recommendations based on user preferences and measurements."
          },
          {
            role: "user",
            content: `Generate outfit recommendations for a person with these measurements: ${JSON.stringify(measurements)} 
                     and these style preferences: ${JSON.stringify(user_preferences)}.
                     Format the response as JSON with categories: tops, bottoms, dresses, shoes, and accessories.`
          }
        ]
      })
    })

    const aiResponse = await response.json()
    console.log('AI Response:', aiResponse)

    let recommendations
    try {
      // Parse the AI response content as JSON
      recommendations = JSON.parse(aiResponse.choices[0].message.content)
    } catch (error) {
      console.error('Error parsing AI response:', error)
      // Fallback to a structured format if parsing fails
      recommendations = {
        tops: [],
        bottoms: [],
        dresses: [],
        shoes: [],
        accessories: []
      }
    }

    // Store recommendations in the database
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { error: dbError } = await supabaseClient
      .from('style_recommendations')
      .insert({
        user_id: req.headers.get('Authorization')?.split(' ')[1],
        recommendations
      })

    if (dbError) {
      console.error('Error storing recommendations:', dbError)
    }

    return new Response(
      JSON.stringify({ recommendations }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in style-ai function:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      },
    )
  }
})
