import React from 'react';
import { User, Mail, Ruler, Weight, Target, Calendar } from 'lucide-react';
import type { UserFormData } from '@/types/auth';

const monthlyTrackingItems = [
  'Daily Workout',
  'Healthy Eating',
  'Water Intake',
  'Sleep Schedule',
  'Meditation',
  'Step Count',
  'Weight Tracking',
  'Progress Photos',
  'Meal Planning',
  'Recovery Days'
];

export const ProfileTab = () => {
  const userData = JSON.parse(localStorage.getItem('user') || '{}');
  const profileData: UserFormData = JSON.parse(localStorage.getItem('profileData') || '{}');
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleItemToggle = (item: string) => {
    setSelectedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="p-4 space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center space-x-4">
          {userData.photoUrl ? (
            <img
              src={userData.photoUrl}
              alt={userData.name}
              className="w-20 h-20 rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
              <User size={32} className="text-purple-600 dark:text-purple-300" />
            </div>
          )}
          <div>
            <h2 className="text-xl font-semibold dark:text-white">{userData.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <Mail size={16} />
              {userData.email}
            </p>
          </div>
        </div>
      </div>

      {profileData.fullName && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="text-lg font-semibold dark:text-white">Personal Details</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">Height</p>
              <p className="font-medium dark:text-white">{profileData.height} cm</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">Weight</p>
              <p className="font-medium dark:text-white">{profileData.weight} kg</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">Age</p>
              <p className="font-medium dark:text-white">{profileData.age} years</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-600 dark:text-gray-400">Gender</p>
              <p className="font-medium dark:text-white capitalize">{profileData.gender}</p>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Fitness Goal</h4>
            <div className="bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-lg">
              {profileData.fitnessObjective?.primary}
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="text-purple-600 dark:text-purple-400" />
          <h3 className="text-lg font-semibold dark:text-white">30-Day Tracking Items</h3>
        </div>
        
        <div className="space-y-3">
          {monthlyTrackingItems.map((item) => (
            <label
              key={item}
              className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleItemToggle(item)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};