import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEmblaCarousel } from "embla-carousel-react";

const onboardingSteps = [
  {
    title: "Welcome to StyleGen AI",
    description: "Your personal AI-powered fashion assistant",
    image: "/lovable-uploads/9805de9e-0c7b-4f7b-933a-e35200da30a9.png",
    bgColor: "bg-[#FF4141]",
  },
  {
    title: "3D Body Scanning",
    description: "Get accurate measurements with our advanced scanning technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800&h=600",
    bgColor: "bg-primary",
  },
  {
    title: "Virtual Try-On",
    description: "Experience clothes virtually with AR technology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600",
    bgColor: "bg-accent",
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary">
      <Carousel
        className="w-full max-w-4xl mx-auto px-4"
        opts={{
          align: "center",
          loop: false,
        }}
        onSelect={handleStepChange}
      >
        <CarouselContent>
          {onboardingSteps.map((step, index) => (
            <CarouselItem key={index}>
              <div
                className={cn(
                  "rounded-3xl overflow-hidden transition-all duration-500 animate-fade-up",
                  step.bgColor
                )}
              >
                <div className="p-8 min-h-[600px] flex flex-col">
                  {/* Logo Section */}
                  <div className="mb-8">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto">
                      <svg
                        className="w-6 h-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="text-white mb-8 text-center">
                    <h1 className="text-4xl font-bold mb-4 tracking-tight">
                      {step.title}
                    </h1>
                    <p className="text-lg opacity-90 max-w-md mx-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Image Section */}
                  <div className="flex-grow flex items-end justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="max-h-[300px] w-auto object-contain rounded-t-3xl shadow-lg transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Controls */}
        <div className="mt-8 flex flex-col items-center gap-6">
          {/* Progress Indicators */}
          <div className="flex gap-2 justify-center">
            {onboardingSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentStep === index
                    ? "bg-primary w-8"
                    : "bg-primary/20 hover:bg-primary/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex w-full justify-center gap-4">
            <Button
              variant="outline"
              className="w-32"
              onClick={handleComplete}
            >
              Skip
            </Button>
            <Button
              className="w-32"
              onClick={() => {
                if (currentStep === onboardingSteps.length - 1) {
                  handleComplete();
                } else {
                  emblaApi?.scrollNext();
                }
              }}
            >
              {currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
            </Button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Onboarding;