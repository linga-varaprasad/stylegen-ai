
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Camera, Sparkles, TrendingUp, UserCircle } from "lucide-react";

const onboardingSteps = [
  {
    title: "Welcome to StyleGen AI",
    description: "Experience personalized fashion recommendations powered by AI",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600",
    icon: <Sparkles className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Smart Body Scanning",
    description: "Get your perfect fit with our advanced 3D scanning technology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600",
    icon: <Camera className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Trending Styles",
    description: "Discover the latest fashion trends curated just for you",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=600",
    icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
  }
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate("/profile");
    }
  };

  const handleSkip = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {onboardingSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentStep === index ? "w-8 bg-purple-500" : "w-2 bg-purple-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Content */}
          <Card className="bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="order-2 md:order-1">
                  <div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-video shadow-lg">
                    <img
                      src={onboardingSteps[currentStep].image}
                      alt={onboardingSteps[currentStep].title}
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                      {onboardingSteps[currentStep].icon}
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="order-1 md:order-2 text-center md:text-left">
                  <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {onboardingSteps[currentStep].title}
                    </h1>
                    <p className="text-lg text-gray-600">
                      {onboardingSteps[currentStep].description}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4">
                      <Button
                        onClick={handleNext}
                        className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
                      >
                        {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
                      </Button>
                      {currentStep < onboardingSteps.length - 1 && (
                        <Button
                          variant="outline"
                          onClick={handleSkip}
                          className="w-full md:w-auto"
                        >
                          Skip
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Button
              onClick={() => navigate("/body-scan")}
              className="h-20 bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90"
            >
              <div className="flex flex-col items-center gap-2">
                <Camera className="h-6 w-6" />
                <span className="text-sm">Body Scan</span>
              </div>
            </Button>
            <Button
              onClick={() => navigate("/try-on")}
              className="h-20 bg-gradient-to-r from-pink-500 to-pink-600 hover:opacity-90"
            >
              <div className="flex flex-col items-center gap-2">
                <UserCircle className="h-6 w-6" />
                <span className="text-sm">Try On</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
