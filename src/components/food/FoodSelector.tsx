import React from 'react';
import { Plus } from 'lucide-react';
import { AddFoodSheet } from './AddFoodSheet';
import type { FoodItem } from '@/types';

interface FoodSelectorProps {
  onSelect: (food: FoodItem) => void;
}

const commonFoods: FoodItem[] = [
  { id: '1', name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
  { id: '2', name: 'Brown Rice', calories: 216, protein: 5, carbs: 45, fat: 1.8 },
  { id: '3', name: 'Salmon', calories: 208, protein: 22, carbs: 0, fat: 13 },
  { id: '4', name: 'Sweet Potato', calories: 103, protein: 2, carbs: 24, fat: 0 },
  { id: '5', name: 'Greek Yogurt', calories: 130, protein: 12, carbs: 9, fat: 4 },
  { id: '6', name: 'Oatmeal', calories: 307, protein: 13, carbs: 55, fat: 5 },
];

export const FoodSelector = ({ onSelect }: FoodSelectorProps) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3">
        {commonFoods.map((food) => (
          <button
            key={food.id}
            onClick={() => onSelect(food)}
            className="bg-white p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h4 className="font-medium text-sm mb-2">{food.name}</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <p>{food.calories} calories</p>
              <div className="grid grid-cols-3 gap-1">
                <p>P: {food.protein}g</p>
                <p>C: {food.carbs}g</p>
                <p>F: {food.fat}g</p>
              </div>
            </div>
            <button className="mt-2 w-full py-1 px-2 text-xs bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 flex items-center justify-center gap-1">
              <Plus size={12} />
              Add
            </button>
          </button>
        ))}
      </div>
      
      <AddFoodSheet onSubmit={onSelect} />
    </div>
  );
};