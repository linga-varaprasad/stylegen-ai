
import { Sparkles, ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const recommendationsData = [
  {
    id: 1,
    title: "Summer Casual",
    description: "Perfect for warm days",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 2,
    title: "Evening Elegance",
    description: "Sophisticated evening wear",
    image: "https://images.unsplash.com/photo-1649972904349-0b5c7d42fa0c?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: 3,
    title: "Business Casual",
    description: "Professional yet comfortable",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          AI Style Recommendations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendationsData.map((item) => (
            <Card key={item.id} className="overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow animate-fade-up">
              <div className="aspect-square relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Sparkles className="text-purple-500 w-6 h-6 drop-shadow-lg" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1 hover:bg-red-50">
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    Skip
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
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
