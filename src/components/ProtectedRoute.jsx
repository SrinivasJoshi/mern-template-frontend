import { useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Navigate } from 'react-router';

export function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  return children;
} 