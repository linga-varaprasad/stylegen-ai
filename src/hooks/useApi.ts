
import { useCallback } from 'react';
import { supabase } from "@/integrations/supabase/client";

export const useApi = () => {
  const invokeFunction = useCallback(async (
    functionName: string, 
    payload: any
  ) => {
    const { data, error } = await supabase.functions.invoke(functionName, {
      body: payload
    });

    if (error) throw error;
    return data;
  }, []);

  const bodyScan = useCallback(async (imageData: string) => {
    return invokeFunction('body-scan', { image_data: imageData });
  }, [invokeFunction]);

  const getStyleRecommendations = useCallback(async (
    preferences: any,
    measurements: any
  ) => {
    return invokeFunction('style-ai', {
      user_preferences: preferences,
      measurements: measurements
    });
  }, [invokeFunction]);

  const tryOnOutfit = useCallback(async (
    outfitImage: string,
    userAvatar: string
  ) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    
    return invokeFunction('try-on', {
      outfit_image: outfitImage,
      user_id: user.id
    });
  }, [invokeFunction]);

  const getSocialTrends = useCallback(async () => {
    const { data, error } = await supabase
      .from('social_trends')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }, []);

  const getProductRecommendations = useCallback(async () => {
    const { data, error } = await supabase
      .from('product_recommendations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  }, []);

  return {
    bodyScan,
    getStyleRecommendations,
    tryOnOutfit,
    getSocialTrends,
    getProductRecommendations
  };
};
