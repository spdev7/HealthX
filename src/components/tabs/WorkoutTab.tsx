import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { WorkoutEntry } from '../../types';

export const WorkoutTab = () => {
  const [entries, setEntries] = useState<WorkoutEntry[]>([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Today's Activity</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <p className="text-sm text-gray-600">Duration</p>
              <p className="font-bold">
                {entries.reduce((sum, entry) => sum + entry.duration, 0)} min
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Calories Burned</p>
              <p className="font-bold">
                {entries.reduce((sum, entry) => sum + entry.caloriesBurned, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.id} className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold">{entry.type}</h4>
            <p className="text-sm text-gray-600">{entry.duration} minutes</p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-20 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg"
      >
        <Plus size={24} />
      </button>
    </div>
  );
};