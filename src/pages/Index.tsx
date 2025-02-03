import { Header } from "@/components/Header";
import { WelcomeSection } from "@/components/WelcomeSection";
import { TrendingOutfits } from "@/components/TrendingOutfits";
import { QuickActions } from "@/components/QuickActions";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <WelcomeSection />
        <TrendingOutfits />
        <QuickActions />
      </main>
    </div>
  );
};

export default Index;