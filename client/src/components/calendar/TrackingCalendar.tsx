import React, { useState } from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';
import { DayDetailsSheet } from './DayDetailsSheet';
import { getDaysInMonth, isSameDay } from '@/lib/dateUtils';
import type { DayStatus, DayProgress } from '@/types';

interface TrackingCalendarProps {
  getStatusForDate: (date: Date) => DayStatus;
  getProgressForDate: (date: Date) => DayProgress | null;
}

export const TrackingCalendar = ({ getStatusForDate, getProgressForDate }: TrackingCalendarProps) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleCloseDetails = () => {
    setSelectedDate(null);
  };

  const days = getDaysInMonth(currentDate);
  const selectedProgress = selectedDate ? getProgressForDate(selectedDate) : null;

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow">
        <CalendarHeader
          currentDate={currentDate}
          onPrevMonth={handlePrevMonth}
          onNextMonth={handleNextMonth}
        />
        
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-sm text-gray-500">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((date, index) => (
            <CalendarDay
              key={index}
              date={date}
              status={getStatusForDate(date)}
              isToday={isSameDay(date, today)}
              onClick={handleDayClick}
            />
          ))}
        </div>
      </div>

      <DayDetailsSheet
        isOpen={selectedDate !== null}
        onClose={handleCloseDetails}
        date={selectedDate}
        progress={selectedProgress}
      />
    </>
  );
};