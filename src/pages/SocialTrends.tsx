
import { TrendingUp, Share2, BookmarkPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const trendsData = [
  {
    id: 1,
    title: "Summer Street Style",
    description: "Urban fashion trends for the season",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 2,
    title: "Minimalist Fashion",
    description: "Less is more with these trending styles",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 3,
    title: "Casual Elegance",
    description: "Effortlessly stylish combinations",
    image: "https://images.unsplash.com/photo-1581092795360-662d53cec7b7?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 4,
    title: "Work From Home Style",
    description: "Comfortable yet professional looks",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

const SocialTrends = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Fashion Trends
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendsData.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow animate-fade-up">
              <div className="aspect-video relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <TrendingUp className="text-purple-500 w-6 h-6 drop-shadow-lg" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
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
