import React, { useState } from 'react';
import { LogIn, AlertCircle } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';

export const LoginPage = ({ onLogin }: { onLogin: (isGuest: boolean) => void }) => {
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSuccess = (credentialResponse: any) => {
    try {
      const decoded = JSON.parse(atob(credentialResponse.credential.split('.')[1]));
      const user = {
        email: decoded.email,
        name: decoded.name,
        photoUrl: decoded.picture,
        lastLogin: new Date().toISOString()
      };
      localStorage.setItem('user', JSON.stringify(user));
      onLogin(false);
    } catch (err) {
      setError('Failed to process login. Please try again.');
      console.error('Login error:', err);
    }
  };

  const handleGuestLogin = () => {
    const guestUser = {
      email: 'guest@example.com',
      name: 'Guest User',
      isGuest: true,
      lastLogin: new Date().toISOString()
    };
    localStorage.setItem('user', JSON.stringify(guestUser));
    onLogin(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <LogIn className="w-16 h-16 mx-auto text-purple-600 mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to Fitness Tracker
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Track your fitness journey with us
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-4">
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => {
                setError('Login failed. Please try again.');
              }}
              useOneTap
            />
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">or</span>
            </div>
          </div>

          <button
            onClick={handleGuestLogin}
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
};