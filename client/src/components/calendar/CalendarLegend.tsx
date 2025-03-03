import React from 'react';
import { Check, X } from 'lucide-react';

export const CalendarLegend = () => (
  <div className="mt-4 bg-discord-700 rounded-lg p-3">
    <h3 className="text-sm font-medium mb-2 text-white">Status Types</h3>
    <div className="grid grid-cols-2 gap-2 text-sm">
      <div className="flex items-center gap-2 bg-discord-600 p-2 rounded-md">
        <Check size={16} className="text-spotify-600" />
        <span className="text-white">All Complete</span>
      </div>
      <div className="flex items-center gap-2 bg-discord-50 p-2 rounded-md">
        <Check size={16} className="text-yellow-400" />
        <span className="text-white">Partially Done</span>
      </div>
      <div className="flex items-center gap-2 bg-discord-50 p-2 rounded-md">
        <X size={16} className="text-red-500" />
        <span>Missed</span>
      </div>
      <div className="flex items-center gap-2 bg-discord-50 p-2 rounded-md">
        <div className="w-4 h-4" />
        <span className="text-white">No Activity</span>
      </div>
    </div>

    <h3 className="text-sm font-medium mt-4 mb-2 text-white">Activity Types</h3>
    <div className="grid grid-cols-3 gap-2">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-spotify-500" />
        <span className="text-sm text-discord-300">Food</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-blue-500" />
        <span className="text-sm text-discord-300">Workout</span>
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