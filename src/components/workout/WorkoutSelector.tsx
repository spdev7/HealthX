import React from 'react';
import { Plus, Dumbbell } from 'lucide-react';
import type { WorkoutType } from '@/types';

interface WorkoutSelectorProps {
  onSelect: (workout: WorkoutType) => void;
}

const predefinedWorkouts: WorkoutType[] = [
  {
    id: '1',
    name: 'Bench Press',
    category: 'chest',
    defaultSets: 3,
    defaultReps: 10
  },
  {
    id: '2',
    name: 'Squats',
    category: 'legs',
    defaultSets: 4,
    defaultReps: 8
  },
  {
    id: '3',
    name: 'Deadlift',
    category: 'back',
    defaultSets: 3,
    defaultReps: 8
  },
  {
    id: '4',
    name: 'Shoulder Press',
    category: 'shoulders',
    defaultSets: 3,
    defaultReps: 12
  },
  {
    id: '5',
    name: 'Bicep Curls',
    category: 'arms',
    defaultSets: 3,
    defaultReps: 12
  },
  {
    id: '6',
    name: 'Tricep Extensions',
    category: 'arms',
    defaultSets: 3,
    defaultReps: 12
  }
];

export const WorkoutSelector = ({ onSelect }: WorkoutSelectorProps) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {predefinedWorkouts.map((workout) => (
          <button
            key={workout.id}
            onClick={() => onSelect(workout)}
            className="bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              <Dumbbell size={16} className="text-purple-500" />
              <h4 className="font-medium text-sm dark:text-gray-200">{workout.name}</h4>
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
              <p className="capitalize">{workout.category}</p>
              <p>{workout.defaultSets} sets × {workout.defaultReps} reps</p>
            </div>
            <button className="mt-2 w-full py-1 px-2 text-xs bg-purple-50 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 rounded-md hover:bg-purple-100 dark:hover:bg-purple-900/70 flex items-center justify-center gap-1">
              <Plus size={12} />
              Add
            </button>
          </button>
        ))}
      </div>
    </div>
  );
};