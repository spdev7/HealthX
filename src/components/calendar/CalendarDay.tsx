import React from 'react';
import { Check, X } from 'lucide-react';
import type { DayStatus } from '@/types';

interface CalendarDayProps {
  date: Date;
  status: DayStatus;
  isToday: boolean;
  onClick: (date: Date) => void;
}

export const CalendarDay = ({ date, status, isToday, onClick }: CalendarDayProps) => {
  const getStatusColor = () => {
    switch (status.type) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'partial':
        return 'bg-yellow-100 text-yellow-800';
      case 'missed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusIcon = () => {
    switch (status.type) {
      case 'success':
        return <Check size={14} className="text-green-600" />;
      case 'partial':
        return <Check size={14} className="text-yellow-600" />;
      case 'missed':
        return <X size={14} className="text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={() => onClick(date)}
      className={`
        relative w-full aspect-square rounded-xl flex flex-col items-center justify-center p-1
        ${getStatusColor()}
        ${isToday ? 'ring-2 ring-blue-500' : ''}
        hover:opacity-90 transition-opacity shadow-sm
      `}
    >
      <span className="text-xs font-medium">{date.getDate()}</span>
      {getStatusIcon()}
      {status.details && (
        <div className="absolute bottom-1 left-1 right-1 flex justify-center gap-0.5">
          {status.details.map((detail, index) => (
            <div
              key={index}
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: detail.color }}
            />
          ))}
        </div>
      )}
    </button>
  );
};