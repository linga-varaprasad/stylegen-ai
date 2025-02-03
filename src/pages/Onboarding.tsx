import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const onboardingSteps = [
  {
    title: "Welcome to StyleGen AI",
    description: "Your personal AI-powered fashion assistant",
    image: "https://source.unsplash.com/800x600/?fashion,technology",
  },
  {
    title: "3D Body Scanning",
    description: "Get accurate measurements with our advanced scanning technology",
    image: "https://source.unsplash.com/800x600/?3d,scanning",
  },
  {
    title: "Virtual Try-On",
    description: "Try clothes virtually with AR technology",
    image: "https://source.unsplash.com/800x600/?virtual,reality",
  },
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const nextStep = () => {
    if (currentStep === onboardingSteps.length - 1) {
      navigate("/");
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-gradient-from to-primary-gradient-to flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white/90 backdrop-blur">
        <div className="relative overflow-hidden">
          <img
            src={onboardingSteps[currentStep].image}
            alt={onboardingSteps[currentStep].title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-3xl font-bold text-white">
              {onboardingSteps[currentStep].title}
            </h1>
          </div>
        </div>
        <div className="p-6">
          <p className="text-center text-gray-600 mb-8">
            {onboardingSteps[currentStep].description}
          </p>
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
              className="w-24"
            >
              <ChevronLeft className="mr-2" />
              Back
            </Button>
            <div className="flex gap-2">
              {onboardingSteps.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentStep ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <Button onClick={nextStep} className="w-24">
              {currentStep === onboardingSteps.length - 1 ? (
                "Start"
              ) : (
                <>
                  Next
                  <ChevronRight className="ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Onboarding;