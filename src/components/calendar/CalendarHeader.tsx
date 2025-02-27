import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth }: CalendarHeaderProps) => (
  <div className="flex items-center justify-between mb-4">
    <button onClick={onPrevMonth} className="p-2 hover:bg-gray-100 rounded-full">
      <ChevronLeft size={20} />
    </button>
    <h2 className="text-lg font-semibold">
      {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
    </h2>
    <button onClick={onNextMonth} className="p-2 hover:bg-gray-100 rounded-full">
      <ChevronRight size={20} />
    </button>
  </div>
);