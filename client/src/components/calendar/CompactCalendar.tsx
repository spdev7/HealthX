import React from 'react';
import { ChevronRight } from 'lucide-react';
import { CalendarDay } from './CalendarDay';
import { isSameDay } from '@/lib/dateUtils';
import type { DayStatus } from '@/types';

interface CompactCalendarProps {
  onDayClick: (date: Date) => void;
  onShowMore: () => void;
  getStatusForDate: (date: Date) => DayStatus;
}

export const CompactCalendar = ({ onDayClick, onShowMore, getStatusForDate }: CompactCalendarProps) => {
  const today = new Date();
  const last15Days = Array.from({ length: 15 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date;
  });

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2">
        {last15Days.map((date, index) => (
          <CalendarDay
            key={index}
            date={date}
            status={getStatusForDate(date)}
            isToday={isSameDay(date, today)}
            onClick={onDayClick}
          />
        ))}
      </div>
      
      <button
        onClick={onShowMore}
        className="w-full flex items-center justify-center gap-2 py-2 text-sm text-gray-600 hover:text-gray-800"
      >
        Show Complete Calendar
        <ChevronRight size={16} />
      </button>
    </div>
  );
};