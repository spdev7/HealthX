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
        return 'bg-spotify-900 text-spotify-300';
      case 'partial':
        return 'bg-discord-600 text-yellow-300';
      case 'missed':
        return 'bg-discord-600 text-red-400';
      default:
        return 'bg-discord-700 text-discord-300';
    }
  };

  
  const getStatusIcon = () => {
    switch (status.type) {
      case 'success':
        return <Check size={14} className="text-spotify-500" />;
      case 'partial':
        return <Check size={14} className="text-yellow-400" />;
      case 'missed':
        return <X size={14} className="text-red-500" />;
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
        ${isToday ? 'ring-2 ring-spotify-500' : ''}
        hover:opacity-90 transition-opacity
      `}
    >
      <span className="text-2xl font-3xl">{date.getDate()}</span>
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