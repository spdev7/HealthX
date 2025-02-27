import React, { useState, useEffect } from 'react';
import { Calendar, CheckCircle2, Trophy, Flame } from 'lucide-react';

interface TrackingItem {
  name: string;
  completed: boolean;
  streak: number;
  lastCompleted: string | null;
}

export const TrackingTab = () => {
  const [trackingItems, setTrackingItems] = useState<TrackingItem[]>(() => {
    const saved = localStorage.getItem('trackingItems');
    const selectedItems = JSON.parse(localStorage.getItem('selectedTrackingItems') || '[]');
    
    if (saved) {
      return JSON.parse(saved);
    }
    
    return selectedItems.map((name: string) => ({
      name,
      completed: false,
      streak: 0,
      lastCompleted: null
    }));
  });

  useEffect(() => {
    // Reset items at midnight
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeToMidnight = tomorrow.getTime() - now.getTime();

    const resetTimer = setTimeout(() => {
      setTrackingItems(prev => prev.map(item => ({
        ...item,
        completed: false
      })));
    }, timeToMidnight);

    return () => clearTimeout(resetTimer);
  }, []);

  useEffect(() => {
    localStorage.setItem('trackingItems', JSON.stringify(trackingItems));
  }, [trackingItems]);

  const handleToggle = (index: number) => {
    const today = new Date().toISOString().split('T')[0];
    
    setTrackingItems(prev => prev.map((item, i) => {
      if (i === index) {
        const wasCompletedToday = item.lastCompleted === today;
        const newCompleted = !item.completed;
        
        return {
          ...item,
          completed: newCompleted,
          streak: newCompleted 
            ? (wasCompletedToday ? item.streak : item.streak + 1)
            : (wasCompletedToday ? item.streak - 1 : item.streak),
          lastCompleted: newCompleted ? today : item.lastCompleted
        };
      }
      return item;
    }));
  };

  const completedCount = trackingItems.filter(item => item.completed).length;
  const progress = (completedCount / trackingItems.length) * 100;
  const longestStreak = Math.max(...trackingItems.map(item => item.streak));

  if (trackingItems.length === 0) {
    return (
      <div className="p-4 text-center">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <Calendar className="w-12 h-12 mx-auto text-purple-600 dark:text-purple-400 mb-4" />
          <h2 className="text-xl font-semibold dark:text-white mb-2">No Tracking Items Selected</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please go to your profile and select items you want to track
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold dark:text-white">30-Day Challenge</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track your daily habits
            </p>
          </div>
          <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Trophy className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-purple-600 dark:text-purple-400">Longest Streak</span>
            </div>
            <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{longestStreak} days</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Flame className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm text-purple-600 dark:text-purple-400">Today's Progress</span>
            </div>
            <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{completedCount}/{trackingItems.length}</p>
          </div>
        </div>

        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-purple-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {trackingItems.map((item, index) => (
          <div
            key={item.name}
            className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium dark:text-white">{item.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.streak} day streak
                </p>
              </div>
              <button
                onClick={() => handleToggle(index)}
                className={`p-2 rounded-full transition-colors ${
                  item.completed
                    ? 'text-purple-600 dark:text-purple-400'
                    : 'text-gray-400 dark:text-gray-600'
                }`}
              >
                <CheckCircle2 
                  className={`w-6 h-6 ${
                    item.completed ? 'fill-current' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};