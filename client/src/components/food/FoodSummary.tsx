import React from 'react';
import type { FoodEntry } from '../../types';

interface FoodSummaryProps {
  entries: FoodEntry[];
}

export const FoodSummary = ({ entries }: FoodSummaryProps) => {
  const totals = entries.reduce(
    (acc, entry) => ({
      calories: acc.calories + entry.calories,
      protein: acc.protein + entry.protein,
      carbs: acc.carbs + entry.carbs,
      fat: acc.fat + entry.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <h3 className="font-semibold mb-2">Today's Summary</h3>
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-600">Calories</p>
          <p className="font-bold">{totals.calories}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Protein</p>
          <p className="font-bold">{totals.protein}g</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Carbs</p>
          <p className="font-bold">{totals.carbs}g</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">Fat</p>
          <p className="font-bold">{totals.fat}g</p>
        </div>
      </div>
    </div>
  );
};