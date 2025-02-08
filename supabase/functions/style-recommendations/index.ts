
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
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

    // Get user's body measurements and preferences
    const { data: measurements } = await supabase
      .from('body_measurements')
      .select('*')
      .eq('user_id', user.id)
      .single()

    // Get previous recommendations to avoid duplicates
    const { data: previousRecommendations } = await supabase
      .from('outfit_suggestions')
      .select('generated_outfit_data')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(5)

    // Generate new recommendations based on measurements and previous recommendations
    const newRecommendations = generateRecommendations(measurements, previousRecommendations)

    // Store new recommendations
    const { data: storedRecommendation, error } = await supabase
      .from('outfit_suggestions')
      .insert({
        user_id: user.id,
        generated_outfit_data: newRecommendations
      })
      .select()
      .single()

    if (error) throw error

    return new Response(
      JSON.stringify(storedRecommendation),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

function generateRecommendations(measurements: any, previousRecommendations: any) {
  // This is a placeholder for the actual AI recommendation logic
  // In a real implementation, this would use GPT-4 or a similar AI model
  return {
    tops: [
      { id: 1, name: 'Classic White T-Shirt', confidence: 0.95 },
      { id: 2, name: 'Navy Blue Blazer', confidence: 0.88 }
    ],
    bottoms: [
      { id: 3, name: 'Black Slim-Fit Jeans', confidence: 0.92 },
      { id: 4, name: 'Khaki Chinos', confidence: 0.85 }
    ],
    accessories: [
      { id: 5, name: 'Brown Leather Belt', confidence: 0.90 },
      { id: 6, name: 'Silver Watch', confidence: 0.87 }
    ]
  }
}
