import { User, Settings, History, CreditCard, Camera, Shirt, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto p-4 animate-fade-up">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Home Button */}
          <Button
            onClick={() => navigate('/')}
            className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90"
          >
            <Home className="mr-2 h-4 w-4" />
            Go to Home
          </Button>

          {/* Profile Header */}
          <Card className="p-6 bg-white/80 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-200">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Sarah Johnson
                </h1>
                <p className="text-gray-600">Fashion Enthusiast</p>
              </div>
            </div>
          </Card>
          
          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button
              className="h-20 bg-gradient-to-r from-purple-500 to-purple-600 hover:opacity-90 shadow-md"
              onClick={() => navigate('/body-scan')}
            >
              <div className="flex flex-col items-center gap-2">
                <Camera className="h-6 w-6" />
                <span className="text-sm">Body Scan</span>
              </div>
            </Button>
            <Button
              className="h-20 bg-gradient-to-r from-pink-500 to-pink-600 hover:opacity-90 shadow-md"
              onClick={() => navigate('/try-on')}
            >
              <div className="flex flex-col items-center gap-2">
                <Shirt className="h-6 w-6" />
                <span className="text-sm">Try On</span>
              </div>
            </Button>
          </div>

          {/* Profile Cards */}
          <div className="space-y-4">
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-200">
              <div className="flex items-center gap-4">
                <Settings className="w-6 h-6 text-purple-500" />
                <div className="flex-1">
                  <h3 className="font-semibold">Account Settings</h3>
                  <p className="text-sm text-gray-600">Update your profile information</p>
                </div>
                <Button variant="outline" className="shrink-0">Edit</Button>
              </div>
            </Card>
            
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-200">
              <div className="flex items-center gap-4">
                <History className="w-6 h-6 text-pink-500" />
                <div className="flex-1">
                  <h3 className="font-semibold">Scan History</h3>
                  <p className="text-sm text-gray-600">View your previous body scans</p>
                </div>
                <Button variant="outline" className="shrink-0">View</Button>
              </div>
            </Card>
            
            <Card className="p-4 hover:shadow-md transition-shadow bg-white/80 backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-200">
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-purple-500" />
                <div className="flex-1">
                  <h3 className="font-semibold">Subscription</h3>
                  <p className="text-sm text-gray-600">Manage your subscription plan</p>
                </div>
                <Button variant="outline" className="shrink-0">Manage</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
