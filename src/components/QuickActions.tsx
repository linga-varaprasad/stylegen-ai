
import { Scan, Shirt } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto p-6 animate-fade-up">
      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={() => navigate('/body-scan')}
          className="h-24 bg-gradient-to-r from-primary-gradient-from to-primary-gradient-to hover:opacity-90"
        >
          <div className="flex flex-col items-center gap-2">
            <Scan className="h-6 w-6" />
            <span>Body Scan</span>
          </div>
        </Button>
        <Button
          onClick={() => navigate('/try-on')}
          className="h-24 bg-gradient-to-r from-accent to-accent hover:opacity-90"
        >
          <div className="flex flex-col items-center gap-2">
            <Shirt className="h-6 w-6" />
            <span>Try On</span>
          </div>
        </Button>
      </div>
    </section>
  );
};
