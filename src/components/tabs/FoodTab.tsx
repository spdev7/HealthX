import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { FoodEntry, FoodItem } from '../../types';
import { FoodList } from '../food/FoodList';
import { FoodSummary } from '../food/FoodSummary';
import { FoodSelector } from '../food/FoodSelector';

export const FoodTab = () => {
  const [entries, setEntries] = useState<FoodEntry[]>([]);

  const handleAddFood = (food: FoodItem) => {
    const newEntry: FoodEntry = {
      ...food,
      id: uuidv4(),
      timestamp: new Date(),
    };
    setEntries([...entries, newEntry]);
  };

  return (
    <div className="p-4 space-y-4">
      <FoodSummary entries={entries} />
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-medium mb-3">Quick Add Food</h3>
        <FoodSelector onSelect={handleAddFood} />
      </div>
      <FoodList entries={entries} />
    </div>
  );
};