
import { useState, useRef } from "react";
import { Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

const BodyScan = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check if user is authenticated
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      return user;
    }
  });

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsCameraActive(false);
    }
  };

  const captureImage = async () => {
    if (!videoRef.current || !user) return;

    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(videoRef.current, 0, 0);
    const imageData = canvas.toDataURL('image/jpeg');

    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke('body-scan', {
        body: { image_data: imageData }
      });

      if (error) throw error;

      toast({
        title: "Scan Complete",
        description: "Your measurements have been processed successfully!"
      });

      // Redirect to recommendations page
      navigate('/recommendations');
    } catch (error) {
      console.error('Error processing scan:', error);
      toast({
        title: "Processing Error",
        description: "Failed to process body scan. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
      stopCamera();
    }
  };

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
            <Button 
              className="mt-6 w-full"
              onClick={isCameraActive ? captureImage : startCamera}
              disabled={isProcessing}
            >
              <Camera className="mr-2" />
              {isProcessing ? "Processing..." : isCameraActive ? "Take Photo" : "Start Scan"}
            </Button>
          </Card>
          <Card className="p-6 flex flex-col items-center justify-center bg-gray-100">
            {isCameraActive ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <>
                <div className="w-64 h-64 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <Camera className="w-16 h-16 text-gray-400" />
                </div>
                <p className="text-gray-600 text-center">
                  Camera preview will appear here
                </p>
              </>
            )}
          </Card>
        </div>
        <div className="mt-6 flex justify-end">
          <Button variant="outline" onClick={() => navigate('/recommendations')}>
            Skip for now
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BodyScan;
