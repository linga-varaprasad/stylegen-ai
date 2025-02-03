import { Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const BodyScan = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">3D Body Scan</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Scan Guide</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  1
                </div>
                <span>Stand 6 feet away from the camera</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  2
                </div>
                <span>Wear tight-fitting clothes</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                  3
                </div>
                <span>Follow the on-screen pose guide</span>
              </li>
            </ul>
            <Button className="mt-6 w-full">
              <Camera className="mr-2" />
              Start Scan
            </Button>
          </Card>
          <Card className="p-6 flex flex-col items-center justify-center bg-gray-100">
            <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              <Camera className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-gray-600 text-center">
              Camera preview will appear here
            </p>
          </Card>
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="outline">
            Skip for now
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BodyScan;