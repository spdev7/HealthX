import React from 'react';
import { Activity, Utensils, Moon, Pill, Home, User } from 'lucide-react';

// Props for NavItem component
interface NavItemProps {
  icon: React.ReactNode; // Icon component
  label?: string;         // Label text
  active: boolean;       // Is the tab active
  onClick: () => void;   // Click handler
}

// Individual navigation item
const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center  transition-all duration-300 ${
      active
        ? 'text-blue-600 font-semibold'
        : 'text-gray-600 hover:text-blue-400'
    }`}
    aria-current={active ? 'page' : undefined}
  >
    <div
      className={`rounded-full p-2 ${
        active ? 'bg-blue-100' : 'hover:bg-gray-100'
      }`}
    >
      {icon}
    </div>
    <span className="text-xs mt-1">{label}</span>
  </button>
);

// Props for the Navigation component
interface NavigationProps {
  activeTab: string;                 // Currently active tab
  setActiveTab: (tab: string) => void; // Setter for the active tab
}

// Main navigation component
export const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 
      rounded-tl-2xl rounded-tr-2xl shadow-lg"
    >
      <div className="flex justify-between items-center max-w-md mx-auto">
        <NavItem
          icon={<Home size={24} />}
          label="Home"
          active={activeTab === 'home'}
          onClick={() => setActiveTab('home')}
        />
        <NavItem
          icon={<Utensils size={24} />}
          label="Food"
          active={activeTab === 'food'}
          onClick={() => setActiveTab('food')}
        />
        <NavItem
          icon={<Activity size={24} />}
          label="Workout"
          active={activeTab === 'workout'}
          onClick={() => setActiveTab('workout')}
        />
        <NavItem
          icon={<Moon size={24} />}
          label="Sleep"
          active={activeTab === 'sleep'}
          onClick={() => setActiveTab('sleep')}
        />
        <NavItem
          icon={<Pill size={24} />}
          label="Meds"
          active={activeTab === 'medicine'}
          onClick={() => setActiveTab('medicine')}
        />
        <NavItem
          icon={<User size={24} />}
          label="Profile"
          active={activeTab === 'profile'}
          onClick={() => setActiveTab('profile')}
        />
      </div>
    </nav>
  );
};
