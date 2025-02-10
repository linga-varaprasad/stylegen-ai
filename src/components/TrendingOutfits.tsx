
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, CreditCard } from "lucide-react";
import { toast } from "sonner";

const trendingOutfits = [
  {
    id: 1,
    title: "Summer Casual",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843",
    price: "$129.99",
    likes: 2.5,
  },
  {
    id: 2,
    title: "Evening Elegance",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    price: "$199.99",
    likes: 3.2,
  },
  {
    id: 3,
    title: "Street Style",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    price: "$89.99",
    likes: 1.8,
  },
  {
    id: 4,
    title: "Business Casual",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    price: "$149.99",
    likes: 2.1,
  },
];

export const TrendingOutfits = () => {
  const handleAddToCart = (outfitId: number, title: string) => {
    toast.success(`Added ${title} to cart`);
  };

  const handleOrder = (outfitId: number, title: string) => {
    toast.success(`Order placed for ${title}`);
  };

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Trending Outfits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trendingOutfits.map((outfit, index) => (
          <Card
            key={outfit.id}
            className="overflow-hidden animate-fade-up hover:shadow-lg transition-shadow duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative h-48">
              <img
                src={outfit.image}
                alt={outfit.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium">
                {outfit.likes}k likes
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-sm">{outfit.title}</h3>
                <span className="text-sm font-semibold text-purple-600">{outfit.price}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAddToCart(outfit.id, outfit.title)}
                  className="flex items-center justify-center gap-1"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleOrder(outfit.id, outfit.title)}
                  className="flex items-center justify-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                >
                  <CreditCard className="h-4 w-4" />
                  Order
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
