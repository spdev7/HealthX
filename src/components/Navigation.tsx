import React from 'react';
import { 
  LayoutDashboard, 
  Utensils, 
  Dumbbell, 
  Trophy,
  User,
  CheckSquare
} from 'lucide-react';

// ... (keep existing NavItem component)

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

export const Navigation = ({ activeTab, setActiveTab }: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-2 rounded-t-xl shadow-lg">
      <div className="grid grid-cols-6 gap-1 max-w-md mx-auto">
        <NavItem
          icon={<LayoutDashboard size={24} />}
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
          icon={<Dumbbell size={24} />}
          label="Workout"
          active={activeTab === 'workout'}
          onClick={() => setActiveTab('workout')}
        />
        <NavItem
          icon={<CheckSquare size={24} />}
          label="Tracking"
          active={activeTab === 'tracking'}
          onClick={() => setActiveTab('tracking')}
        />
        <NavItem
          icon={<Trophy size={24} />}
          label="Journey"
          active={activeTab === 'journey'}
          onClick={() => setActiveTab('journey')}
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