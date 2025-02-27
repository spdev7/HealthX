import React, { useState } from 'react';
import { FootprintsIcon } from 'lucide-react';
import type { StepsEntry } from '../../types';

export const StepsTab = () => {
  const [entries, setEntries] = useState<StepsEntry[]>([]);
  const goalSteps = 10000;

  return (
    <div className="p-4">
      <div className="bg-purple-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg">Today's Steps</h3>
            <p className="text-purple-600 text-2xl font-bold mt-1">
              {entries[0]?.count || 0}
            </p>
          </div>
          <FootprintsIcon size={40} className="text-purple-500" />
        </div>
        <div className="w-full bg-purple-200 rounded-full h-2.5">
          <div
            className="bg-purple-600 h-2.5 rounded-full"
            style={{
              width: `${Math.min(
                ((entries[0]?.count || 0) / goalSteps) * 100,
                100
              )}%`,
            }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Goal: {goalSteps.toLocaleString()} steps
        </p>
      </div>

      <div className="space-y-4">
        {entries.slice(1).map((entry) => (
          <div key={entry.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">
                  {entry.date.toLocaleDateString()}
                </p>
                <p className="font-semibold">{entry.count.toLocaleString()} steps</p>
              </div>
              <div
                className={`text-sm ${
                  entry.count >= goalSteps ? 'text-green-600' : 'text-orange-600'
                }`}
              >
                {Math.round((entry.count / goalSteps) * 100)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};