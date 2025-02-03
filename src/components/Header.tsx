import { Menu, Scan, Shirt, Sparkles, TrendingUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Scan, label: "Body Scan", path: "/body-scan" },
    { icon: Shirt, label: "Try On", path: "/try-on" },
    { icon: Sparkles, label: "AI Recommendations", path: "/recommendations" },
    { icon: TrendingUp, label: "Trends", path: "/trends" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">StyleGen AI</h1>
        <nav className="hidden md:flex gap-4">
          {menuItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              className="text-white hover:bg-white/20"
              onClick={() => navigate(item.path)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="text-white md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};