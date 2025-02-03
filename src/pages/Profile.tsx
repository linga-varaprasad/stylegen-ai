import { User, Settings, History, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-10 h-10 text-gray-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">User Profile</h1>
              <p className="text-gray-600">Manage your account and preferences</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <Settings className="w-6 h-6 text-gray-400" />
                <div className="flex-1">
                  <h3 className="font-semibold">Account Settings</h3>
                  <p className="text-sm text-gray-600">Update your profile information</p>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <History className="w-6 h-6 text-gray-400" />
                <div className="flex-1">
                  <h3 className="font-semibold">Scan History</h3>
                  <p className="text-sm text-gray-600">View your previous body scans</p>
                </div>
                <Button variant="outline">View</Button>
              </div>
            </Card>
            
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <CreditCard className="w-6 h-6 text-gray-400" />
                <div className="flex-1">
                  <h3 className="font-semibold">Subscription</h3>
                  <p className="text-sm text-gray-600">Manage your subscription plan</p>
                </div>
                <Button variant="outline">Manage</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;