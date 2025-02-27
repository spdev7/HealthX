import React, { useState } from 'react';
import { TrackingCalendar } from '../calendar/TrackingCalendar';
import { CompactCalendar } from '../calendar/CompactCalendar';
import { CalendarLegend } from '../calendar/CalendarLegend';
import { DayDetailsSheet } from '../calendar/DayDetailsSheet';
import { getStatusForDate, getProgressForDate } from '@/lib/calendarUtils';
import type { DayProgress } from '@/types';

export const HomeTab = () => {
  const [showFullCalendar, setShowFullCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleCloseDetails = () => {
    setSelectedDate(null);
  };

  const selectedProgress = selectedDate ? getProgressForDate(selectedDate) : null;

  return (
    <div className="p-4">
      <h2 className="text-lg font-medium mb-4">Progress Overview</h2>
      
      {showFullCalendar ? (
        <TrackingCalendar 
          getStatusForDate={getStatusForDate}
          getProgressForDate={getProgressForDate}
        />
      ) : (
        <CompactCalendar
          onDayClick={handleDayClick}
          onShowMore={() => setShowFullCalendar(true)}
          getStatusForDate={getStatusForDate}
        />
      )}
      
      <CalendarLegend />

      <DayDetailsSheet
        isOpen={selectedDate !== null}
        onClose={handleCloseDetails}
        date={selectedDate}
        progress={selectedProgress}
      />
    </div>
  );
};