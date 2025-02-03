import { Card } from "@/components/ui/card";

const trendingOutfits = [
  {
    id: 1,
    title: "Summer Casual",
    image: "https://source.unsplash.com/400x500/?summer,fashion",
    likes: 2.5,
  },
  {
    id: 2,
    title: "Evening Elegance",
    image: "https://source.unsplash.com/400x500/?evening,dress",
    likes: 3.2,
  },
  {
    id: 3,
    title: "Street Style",
    image: "https://source.unsplash.com/400x500/?street,style",
    likes: 1.8,
  },
  {
    id: 4,
    title: "Business Casual",
    image: "https://source.unsplash.com/400x500/?business,attire",
    likes: 2.1,
  },
];

export const TrendingOutfits = () => {
  return (
    <section className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Trending Outfits</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trendingOutfits.map((outfit, index) => (
          <Card
            key={outfit.id}
            className="overflow-hidden animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={outfit.image}
              alt={outfit.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <h3 className="font-medium text-sm">{outfit.title}</h3>
              <p className="text-sm text-gray-500">{outfit.likes}k likes</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};