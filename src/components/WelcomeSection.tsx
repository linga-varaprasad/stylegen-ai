import { Sparkles } from "lucide-react";

export const WelcomeSection = () => {
  return (
    <section className="container mx-auto p-6 animate-fade-down">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-5 w-5 text-accent" />
        <h2 className="text-xl font-semibold">Welcome back!</h2>
      </div>
      <p className="text-gray-600">Let's find your perfect style today</p>
    </section>
  );
};