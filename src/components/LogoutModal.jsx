import React, { useContext } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { AuthContext } from '../context/AuthContext';

export default function LogoutModal({ isOpen, onClose }) {
  const { logout } = useContext(AuthContext);

  if (!isOpen) return null;

  const handleLogout = async () => {
    await logout();
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Card className="z-10 max-w-sm p-6">
        <h3 className="text-xl font-bold mb-4">Confirm Logout</h3>
        <p className="mb-4">Are you sure you want to logout?</p>
        <div className="flex justify-end">
          <Button variant="outline" onClick={onClose} className="mr-4">
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Card>
    </div>
  );
} 