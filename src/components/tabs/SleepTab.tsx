import React, { useState } from 'react';
import { Moon, Plus } from 'lucide-react';
import type { SleepEntry } from '../../types';

export const SleepTab = () => {
  const [entries, setEntries] = useState<SleepEntry[]>([]);
  const [showForm, setShowForm] = useState(false);

  const calculateDuration = (start: Date, end: Date) => {
    const diff = end.getTime() - start.getTime();
    return Math.round(diff / (1000 * 60 * 60) * 10) / 10;
  };

  return (
    <div className="p-4">
      <div className="bg-indigo-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg">Last Night's Sleep</h3>
            {entries[0] && (
              <p className="text-indigo-600 text-2xl font-bold mt-1">
                {calculateDuration(entries[0].startTime, entries[0].endTime)}h
              </p>
            )}
          </div>
          <Moon size={40} className="text-indigo-500" />
        </div>
        {entries[0] && (
          <p className="text-sm text-gray-600">
            Quality: {entries[0].quality.charAt(0).toUpperCase() + entries[0].quality.slice(1)}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {entries.slice(1).map((entry) => (
          <div key={entry.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">
                  {entry.startTime.toLocaleDateString()}
                </p>
                <p className="font-semibold">
                  {calculateDuration(entry.startTime, entry.endTime)}h
                </p>
              </div>
              <div className="text-sm text-indigo-600">
                {entry.quality}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-20 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
      >
        <Plus size={24} />
      </button>
    </div>
  );
};