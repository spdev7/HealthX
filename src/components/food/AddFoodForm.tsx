import React from 'react';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';
import { FormField } from '../ui/FormField';
import type { FoodEntry } from '../../types';

interface AddFoodFormProps {
  onSubmit: (data: Omit<FoodEntry, 'id' | 'timestamp'>) => void;
  onClose: () => void;
}

export const AddFoodForm = ({ onSubmit, onClose }: AddFoodFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<FoodEntry, 'id' | 'timestamp'>>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Add Food Entry</h3>
        <button
          type="button"
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>

      <FormField
        label="Food Name"
        name="name"
        register={register}
        error={errors.name?.message}
      />

      <FormField
        label="Calories"
        name="calories"
        type="number"
        register={register}
        error={errors.calories?.message}
      />

      <FormField
        label="Protein (g)"
        name="protein"
        type="number"
        register={register}
        error={errors.protein?.message}
      />

      <FormField
        label="Carbs (g)"
        name="carbs"
        type="number"
        register={register}
        error={errors.carbs?.message}
      />

      <FormField
        label="Fat (g)"
        name="fat"
        type="number"
        register={register}
        error={errors.fat?.message}
      />

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Entry
        </button>
      </div>
    </form>
  );
};