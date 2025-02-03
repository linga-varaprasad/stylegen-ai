import { TrendingUp, Share2, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SocialTrends = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Fashion Trends</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="aspect-video bg-gray-100 relative">
                <div className="absolute top-2 right-2">
                  <TrendingUp className="text-primary w-6 h-6" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Trending Style #{item}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Discover what's trending in fashion right now
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button className="flex-1">
                    <BookmarkPlus className="mr-2 h-4 w-4" />
                    Save
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

export default SocialTrends;