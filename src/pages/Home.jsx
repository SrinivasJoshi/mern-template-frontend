import { Link } from 'react-router';
import { Button } from '@/components/ui/button';

export function Home() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Your App
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A minimal template for your side projects with authentication ready to go.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link to="/signin">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 