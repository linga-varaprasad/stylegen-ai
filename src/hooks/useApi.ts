
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
    return invokeFunction('try-on', {
      outfit_image: outfitImage,
      user_avatar: userAvatar
    });
  }, [invokeFunction]);

  return {
    bodyScan,
    getStyleRecommendations,
    tryOnOutfit
  };
};
