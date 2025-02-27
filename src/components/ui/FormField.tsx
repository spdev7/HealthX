import React from 'react';
import { UseFormRegister } from 'react-hook-form';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  error?: string;
}

export const FormField = ({
  label,
  name,
  type = 'text',
  register,
  error,
}: FormFieldProps) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      {...register(name)}
      type={type}
      id={name}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);