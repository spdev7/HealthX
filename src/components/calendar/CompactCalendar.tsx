import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { calculateStars } from '@/lib/progressUtils';
import type { DayStatus } from '@/types';

interface CompactCalendarProps {
  onDayClick: (date: Date) => void;
  onShowMore: () => void;
  getStatusForDate: (date: Date) => DayStatus;
}

export const CompactCalendar = ({ onDayClick, onShowMore, getStatusForDate }: CompactCalendarProps) => {
  const [startIndex, setStartIndex] = useState(0);
  const today = new Date();
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (startIndex + i));
    return date;
  });

  const handlePrevWeek = () => {
    setStartIndex(prev => prev + 7);
  };

  const handleNextWeek = () => {
    setStartIndex(prev => Math.max(0, prev - 7));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={handlePrevWeek}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
        </button>
        <button 
          onClick={handleNextWeek}
          disabled={startIndex === 0}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
        >
          <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {last7Days.map((date, index) => {
          const status = getStatusForDate(date);
          const completionPercentage = status.type === 'success' ? 100 : 
                                     status.type === 'partial' ? 50 : 
                                     status.type === 'missed' ? 25 : 0;
          const stars = calculateStars(completionPercentage);

          return (
            <div
              key={index}
              onClick={() => onDayClick(date)}
              className="aspect-square rounded-xl flex flex-col items-center justify-center p-1 bg-white dark:bg-gray-800 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-medium dark:text-gray-300">
                {date.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <span className="text-lg font-bold dark:text-gray-200">{date.getDate()}</span>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} size={12} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <button
        onClick={onShowMore}
        className="w-full flex items-center justify-center gap-2 py-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
      >
        Show Complete Calendar
        <ChevronRight size={16} />
      </button>
    </div>
  );
};