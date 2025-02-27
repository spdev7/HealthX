import React from 'react';
import { Calendar as CalendarIcon, Check } from 'lucide-react';

export const CalendarTab = () => {
  const days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date;
  });

  // Mock data - replace with actual tracking data
  const getCompletionStatus = (date: Date) => {
    return Math.random() > 0.3;
  };

  return (
    <div className="p-4">
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg">Progress Calendar</h3>
            <p className="text-sm text-gray-600 mt-1">Last 30 days</p>
          </div>
          <CalendarIcon size={40} className="text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((date, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg flex items-center justify-center flex-col ${
              getCompletionStatus(date)
                ? 'bg-green-100 text-green-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <span className="text-xs">{date.getDate()}</span>
            {getCompletionStatus(date) && <Check size={16} />}
          </div>
        ))}
      </div>
    </div>
  );
};