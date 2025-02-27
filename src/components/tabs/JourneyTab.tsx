import React from 'react';
import { Star, Trophy } from 'lucide-react';
import { calculateStars } from '@/lib/progressUtils';

export const JourneyTab = () => {
  // Mock data - replace with real data
  const journeyData = Array.from({ length: 90 }, (_, i) => ({
    day: i + 1,
    completionPercentage: Math.random() * 100,
    achievements: ['Workout completed', 'Diet goals met'].filter(() => Math.random() > 0.5),
  }));

  return (
    <div className="p-4 space-y-6">
      <div className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-700 dark:to-purple-900 p-6 rounded-xl text-white">
        <h2 className="text-2xl font-bold mb-2">90 Day Challenge</h2>
        <p className="opacity-90">Track your transformation journey</p>
      </div>

      <div className="grid gap-4">
        {journeyData.map((day, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Day {day.day}</h3>
              <div className="flex gap-1">
                {Array.from({ length: calculateStars(day.completionPercentage) }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            {day.achievements.length > 0 && (
              <div className="mt-2 space-y-1">
                {day.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Trophy size={14} className="text-purple-500" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};