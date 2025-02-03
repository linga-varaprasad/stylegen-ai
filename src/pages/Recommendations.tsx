import { Sparkles, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">AI Style Recommendations</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="aspect-square bg-gray-100 relative">
                <div className="absolute top-2 right-2">
                  <Sparkles className="text-primary w-6 h-6" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Outfit Suggestion #{item}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Perfect for your style and preferences
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    Skip
                  </Button>
                  <Button className="flex-1">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Like
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;