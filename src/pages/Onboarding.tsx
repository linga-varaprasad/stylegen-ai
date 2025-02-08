
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronRight } from "lucide-react";

const onboardingSteps = [
  {
    title: "Welcome to StyleGen AI",
    description: "Experience the future of fashion with AI-powered styling and recommendations tailored just for you",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600",
    gradient: "from-[#FF6B6B] to-[#FFE66D]",
  },
  {
    title: "Smart Body Scanning",
    description: "Get perfectly fitted clothes with our advanced 3D body scanning technology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600",
    gradient: "from-[#4ECDC4] to-[#556270]",
  },
  {
    title: "AI-Powered Recommendations",
    description: "Discover your perfect style with personalized recommendations powered by artificial intelligence",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=600",
    gradient: "from-[#6C63FF] to-[#3F3D56]",
  },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentStep, setCurrentStep] = useState(0);

  const handleComplete = () => {
    navigate("/");
  };

  const handleStepChange = () => {
    if (emblaApi) {
      setCurrentStep(emblaApi.selectedScrollSnap());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Carousel
        className="w-full max-w-7xl mx-auto"
        opts={{
          align: "center",
          loop: false,
        }}
        onSelect={handleStepChange}
        ref={emblaRef}
      >
        <CarouselContent>
          {onboardingSteps.map((step, index) => (
            <CarouselItem key={index} className="p-1 md:p-4">
              <div className={cn(
                "rounded-[2rem] overflow-hidden bg-gradient-to-br shadow-xl",
                step.gradient
              )}>
                <div className="min-h-[80vh] p-8 flex flex-col md:flex-row items-center gap-8">
                  {/* Content Section */}
                  <div className="flex-1 text-white space-y-6 animate-fade-up">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                      {step.title}
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-md leading-relaxed">
                      {step.description}
                    </p>
                    
                    {index === onboardingSteps.length - 1 ? (
                      <Button 
                        size="lg"
                        onClick={handleComplete}
                        className="mt-8 bg-white text-black hover:bg-white/90"
                      >
                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    ) : (
                      <Button 
                        size="lg"
                        onClick={() => emblaApi?.scrollNext()}
                        className="mt-8 bg-white text-black hover:bg-white/90"
                      >
                        Next <ChevronRight className="ml-2 w-4 h-4" />
                      </Button>
                    )}
                  </div>

                  {/* Image Section */}
                  <div className="flex-1 h-full">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-2xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Progress Indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {onboardingSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentStep === index
                  ? "bg-primary w-8"
                  : "bg-primary/20 hover:bg-primary/40"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Skip Button */}
        <div className="mt-4 flex justify-center">
          <Button
            variant="ghost"
            onClick={handleComplete}
            className="text-gray-600 hover:text-gray-900"
          >
            Skip
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

export default Onboarding;
