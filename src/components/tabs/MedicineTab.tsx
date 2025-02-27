import React, { useState } from 'react';
import { Pill, Plus, Check } from 'lucide-react';
import type { MedicineEntry } from '../../types';

export const MedicineTab = () => {
  const [entries, setEntries] = useState<MedicineEntry[]>([]);
  const [showForm, setShowForm] = useState(false);

  const toggleTaken = (id: string) => {
    setEntries(entries.map(entry =>
      entry.id === id ? { ...entry, taken: !entry.taken } : entry
    ));
  };

  return (
    <div className="p-4">
      <div className="bg-rose-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg">Today's Medicines</h3>
            <p className="text-sm text-gray-600 mt-1">
              {entries.filter(e => e.taken).length}/{entries.length} taken
            </p>
          </div>
          <Pill size={40} className="text-rose-500" />
        </div>
      </div>

      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.id}
            className={`bg-white p-4 rounded-lg shadow flex justify-between items-center ${
              entry.taken ? 'bg-rose-50' : ''
            }`}
          >
            <div>
              <h4 className="font-semibold">{entry.name}</h4>
              <p className="text-sm text-gray-600">{entry.dosage}</p>
            </div>
            <button
              onClick={() => toggleTaken(entry.id)}
              className={`p-2 rounded-full ${
                entry.taken
                  ? 'bg-rose-100 text-rose-600'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <Check size={20} />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-20 right-4 bg-rose-600 text-white p-3 rounded-full shadow-lg"
      >
        <Plus size={24} />
      </button>
    </div>
  );
};