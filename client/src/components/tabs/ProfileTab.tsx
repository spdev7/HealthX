import React from 'react';
import { User, Mail, Ruler, Weight, Target } from 'lucide-react';
import type { UserProfile } from '@/types';

export const ProfileTab = () => {
  // Mock data - replace with real user data
  const profile: UserProfile = {
    email: 'user@example.com',
    name: 'John Doe',
    gender: 'male',
    photoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    height: 175,
    weight: 70,
    goals: ['Build muscle', 'Improve strength']
  };

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center space-x-4">
        <img
          src={profile.photoUrl}
          alt={profile.name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="text-xl font-semibold">{profile.name}</h2>
          <p className="text-gray-600 flex items-center gap-1">
            <Mail size={16} />
            {profile.email}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <Ruler size={16} />
            <span className="text-sm">Height</span>
          </div>
          <p className="text-lg font-medium">{profile.height} cm</p>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <Weight size={16} />
            <span className="text-sm">Weight</span>
          </div>
          <p className="text-lg font-medium">{profile.weight} kg</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <Target size={16} />
          <span className="text-sm font-medium">Goals</span>
        </div>
        <div className="space-y-2">
          {profile.goals?.map((goal, index) => (
            <div
              key={index}
              className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm"
            >
              {goal}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};