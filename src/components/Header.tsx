
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
    <header className="w-full bg-white shadow-md dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <h1 
              onClick={() => navigate('/')} 
              className="text-2xl font-bold bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to bg-clip-text text-transparent cursor-pointer"
            >
              StyleGen AI
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <Button
                key={item.path}
                variant="ghost"
                className="flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => navigate(item.path)}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};
