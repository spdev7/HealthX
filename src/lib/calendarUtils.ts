import type { DayStatus, DayProgress } from '@/types';

export const getStatusForDate = (date: Date): DayStatus => {
  // Example implementation - replace with real data
  const dayOfMonth = date.getDate();
  
  if (dayOfMonth % 4 === 0) {
    return {
      type: 'success',
      details: [
        { type: 'food', color: '#22c55e' },
        { type: 'workout', color: '#3b82f6' },
        { type: 'sleep', color: '#8b5cf6' },
      ],
    };
  } else if (dayOfMonth % 4 === 1) {
    return {
      type: 'partial',
      details: [
        { type: 'food', color: '#22c55e' },
        { type: 'steps', color: '#f59e0b' },
      ],
    };
  } else if (dayOfMonth % 4 === 2) {
    return {
      type: 'missed',
      details: [
        { type: 'medicine', color: '#ef4444' },
      ],
    };
  }
  
  return { type: 'empty' };
};

export const getProgressForDate = (date: Date): DayProgress | null => {
  // Example implementation - replace with real data
  const dayOfMonth = date.getDate();
  
  if (dayOfMonth % 4 === 0) {
    return {
      food: {
        calories: 2100,
        protein: 150,
        carbs: 200,
        fat: 70,
      },
      workout: {
        duration: 45,
        caloriesBurned: 400,
        type: 'Strength Training',
      },
      sleep: {
        duration: 7.5,
        quality: 'good',
      },
    };
  } else if (dayOfMonth % 4 === 1) {
    return {
      food: {
        calories: 1800,
        protein: 120,
        carbs: 180,
        fat: 60,
      },
      steps: {
        count: 8500,
      },
    };
  } else if (dayOfMonth % 4 === 2) {
    return {
      medicine: {
        entries: [
          { name: 'Vitamin D', taken: false },
          { name: 'Multivitamin', taken: false },
        ],
      },
    };
  }
  
  return null;
};