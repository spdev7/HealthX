import React from 'react';
import type { FoodEntry } from '../../types';

interface FoodListProps {
  entries: FoodEntry[];
}

export const FoodList = ({ entries }: FoodListProps) => (
  <div className="space-y-4">
    {entries.map((entry) => (
      <div key={entry.id} className="bg-white p-4 rounded-lg shadow">
        <h4 className="font-semibold">{entry.name}</h4>
        <div className="mt-2 text-sm text-gray-600 space-y-1">
          <p>{entry.calories} calories</p>
          <div className="flex space-x-4">
            <p>Protein: {entry.protein}g</p>
            <p>Carbs: {entry.carbs}g</p>
            <p>Fat: {entry.fat}g</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);