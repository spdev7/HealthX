import React from 'react';
import { useForm } from 'react-hook-form';
import { Plus } from 'lucide-react';
import type { FoodItem } from '@/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

interface AddFoodSheetProps {
  onSubmit: (data: FoodItem) => void;
}

export const AddFoodSheet = ({ onSubmit }: AddFoodSheetProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Omit<FoodItem, 'id'>>();

  const onSubmitForm = (data: Omit<FoodItem, 'id'>) => {
    onSubmit({ ...data, id: crypto.randomUUID() });
    reset();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
          <Plus size={20} />
          Add Custom Food
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Custom Food</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Food Name</Label>
            <Input
              id="name"
              {...register('name', { required: 'Food name is required' })}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="calories">Calories</Label>
            <Input
              id="calories"
              type="number"
              {...register('calories', { required: 'Calories are required' })}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="protein">Protein (g)</Label>
              <Input
                id="protein"
                type="number"
                {...register('protein', { required: 'Protein is required' })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="carbs">Carbs (g)</Label>
              <Input
                id="carbs"
                type="number"
                {...register('carbs', { required: 'Carbs are required' })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fat">Fat (g)</Label>
              <Input
                id="fat"
                type="number"
                {...register('fat', { required: 'Fat is required' })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
          >
            Add Food
          </button>
        </form>
      </SheetContent>
    </Sheet>
  );
};