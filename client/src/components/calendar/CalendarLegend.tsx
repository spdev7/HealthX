import React from 'react';
import { Check, X } from 'lucide-react';

export const CalendarLegend = () => (
  <div className="mt-4 bg-white rounded-lg p-3 shadow-sm">
    <h3 className="text-sm font-medium mb-2">Status Types</h3>
    <div className="grid grid-cols-2 gap-2 text-sm">
      <div className="flex items-center gap-2 bg-green-50 p-2 rounded-md">
        <Check size={16} className="text-green-600" />
        <span>All Complete</span>
      </div>
      <div className="flex items-center gap-2 bg-yellow-50 p-2 rounded-md">
        <Check size={16} className="text-yellow-600" />
        <span>Partially Done</span>
      </div>
      <div className="flex items-center gap-2 bg-red-50 p-2 rounded-md">
        <X size={16} className="text-red-600" />
        <span>Missed</span>
      </div>
      <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-md">
        <div className="w-4 h-4" />
        <span>No Activity</span>
      </div>
    </div>

    <h3 className="text-sm font-medium mt-4 mb-2">Activity Types</h3>
    <div className="grid grid-cols-3 gap-2">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-sm">Food</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-500" />
        <span className="text-sm">Workout</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <span className="text-sm">Steps</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-purple-500" />
        <span className="text-sm">Sleep</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <span className="text-sm">Medicine</span>
      </div>
    </div>
  </div>
);