
import { useState } from "react";
import { Camera, Share2, ShoppingBag, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useApi } from "@/hooks/useApi";

const TryOn = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [renderedImage, setRenderedImage] = useState<string | null>(null);
  const { tryOnOutfit } = useApi();
  const { toast } = useToast();

  const handleTryOn = async () => {
    try {
      setIsProcessing(true);
      // For demo, use a mock outfit image
      const mockOutfitImage = "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800";
      
      const result = await tryOnOutfit(mockOutfitImage, "");
      setRenderedImage(result.rendered_image);
      
      toast({
        title: "Try-on complete!",
        description: "Your virtual outfit has been generated.",
      });
    } catch (error) {
      console.error('Try-on error:', error);
      toast({
        title: "Error",
        description: "Failed to process the try-on request.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Virtual Try-On Studio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">Selected Outfit</h2>
            <div className="space-y-4">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <Camera className="w-16 h-16 text-gray-400" />
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                onClick={handleTryOn}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>Try On Outfit</>
                )}
              </Button>
              <div className="flex gap-2">
                <Button className="flex-1" variant="outline" disabled={!renderedImage}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Look
                </Button>
                <Button className="flex-1" variant="outline">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop Items
                </Button>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-4">AR Preview</h2>
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center overflow-hidden">
              {renderedImage ? (
                <img 
                  src={renderedImage} 
                  alt="Virtual try-on" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center space-y-2">
                  <Camera className="w-16 h-16 mx-auto text-gray-400" />
                  <p className="text-gray-500">Click "Try On Outfit" to start</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TryOn;
