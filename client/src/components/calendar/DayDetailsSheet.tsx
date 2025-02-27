import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import { formatDate } from '@/lib/dateUtils';
import type { DayProgress } from '@/types';

interface DayDetailsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  date: Date | null;
  progress: DayProgress | null;
}

export const DayDetailsSheet = ({ isOpen, onClose, date, progress }: DayDetailsSheetProps) => {
  if (!date || !progress) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{formatDate(date)}</SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 space-y-6">
          {progress.food && (
            <div className="space-y-2">
              <h3 className="font-semibold text-green-700">Food</h3>
              <div className="bg-green-50 p-3 rounded-lg">
                <p>Calories: {progress.food.calories}</p>
                <p>Protein: {progress.food.protein}g</p>
                <p>Carbs: {progress.food.carbs}g</p>
                <p>Fat: {progress.food.fat}g</p>
              </div>
            </div>
          )}

          {progress.workout && (
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-700">Workout</h3>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p>Duration: {progress.workout.duration} minutes</p>
                <p>Calories Burned: {progress.workout.caloriesBurned}</p>
                <p>Type: {progress.workout.type}</p>
              </div>
            </div>
          )}

          {progress.steps && (
            <div className="space-y-2">
              <h3 className="font-semibold text-yellow-700">Steps</h3>
              <div className="bg-yellow-50 p-3 rounded-lg">
                <p>Count: {progress.steps.count}</p>
                <p>Goal Progress: {Math.round((progress.steps.count / 10000) * 100)}%</p>
              </div>
            </div>
          )}

          {progress.sleep && (
            <div className="space-y-2">
              <h3 className="font-semibold text-purple-700">Sleep</h3>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p>Duration: {progress.sleep.duration} hours</p>
                <p>Quality: {progress.sleep.quality}</p>
              </div>
            </div>
          )}

          {progress.medicine && (
            <div className="space-y-2">
              <h3 className="font-semibold text-red-700">Medicine</h3>
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="space-y-2">
                  {progress.medicine.entries.map((med, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{med.name}</span>
                      <span>{med.taken ? '✓ Taken' : '✗ Missed'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};