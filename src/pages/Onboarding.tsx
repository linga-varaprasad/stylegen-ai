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

const onboardingSteps = [
  {
    title: "StyleGen AI",
    description: "Your personal AI-powered fashion assistant",
    image: "/lovable-uploads/9805de9e-0c7b-4f7b-933a-e35200da30a9.png",
    bgColor: "bg-[#FF4141]",
  },
  {
    title: "3D Body Scanning",
    description: "Get accurate measurements with our advanced scanning technology",
    image: "https://source.unsplash.com/800x600/?3d,scanning",
    bgColor: "bg-primary",
  },
  {
    title: "Virtual Try-On",
    description: "Try clothes virtually with AR technology",
    image: "https://source.unsplash.com/800x600/?virtual,reality",
    bgColor: "bg-accent",
  },
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Carousel
        className="w-full max-w-md"
        onSelect={(index) => setCurrentStep(index)}
      >
        <CarouselContent>
          {onboardingSteps.map((step, index) => (
            <CarouselItem key={index}>
              <div
                className={cn(
                  "rounded-3xl overflow-hidden transition-all duration-500",
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

                  {/* Title Section */}
                  <div className="text-white mb-8">
                    <h1 className="text-4xl font-bold mb-4">{step.title}</h1>
                    <p className="text-lg opacity-90">{step.description}</p>
                  </div>

                  {/* Image Section */}
                  <div className="flex-grow flex items-end justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="max-h-[300px] object-contain rounded-t-3xl"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="mt-4 flex flex-col items-center gap-4">
          {/* Progress Indicators */}
          <div className="flex gap-2 justify-center">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  currentStep === index
                    ? "bg-primary w-4"
                    : "bg-gray-300"
                )}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
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
              onClick={
                currentStep === onboardingSteps.length - 1
                  ? handleComplete
                  : () => setCurrentStep(currentStep + 1)
              }
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