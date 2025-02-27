import { Link } from 'react-router';
import { Button } from '@/components/ui/button';
import { UserMenu } from './UserMenu';
import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';

export function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">Logo</span>
          </Link>
          
          <div className="flex items-center gap-4">
            {user ? (
              <UserMenu />
            ) : (
              <Button asChild variant="secondary">
                <Link to="/signin">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
} 