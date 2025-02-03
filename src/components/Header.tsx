import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">StyleGen AI</h1>
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};