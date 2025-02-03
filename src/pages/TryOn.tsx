import { Camera, Share2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TryOn = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Virtual Try-On Studio</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Selected Outfit</h2>
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Camera className="w-16 h-16 text-gray-400" />
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Look
                </Button>
                <Button className="flex-1" variant="secondary">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Shop Items
                </Button>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">AR Preview</h2>
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">AR preview will appear here</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TryOn;