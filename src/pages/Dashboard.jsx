import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-6">
        {/* Welcome Card */}
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-semibold">
              Welcome back, {user?.username}!
            </h2>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This is your dashboard. Start building your app's features here.
            </p>
          </CardContent>
        </Card>

        {/* Stats or Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <h3 className="font-medium">Quick Start</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Add your first feature or content here.
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-medium">Documentation</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Check out the docs to learn more about building your app.
            </p>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-medium">Settings</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Configure your dashboard preferences.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
} 