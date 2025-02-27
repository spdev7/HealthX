// ... (keep existing imports)
// import { TrackingTab } from './components/tabs/TrackingTab';
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomeTab } from './components/tabs/HomeTab';
import { FoodTab } from './components/tabs/FoodTab';
import { WorkoutTab } from './components/tabs/WorkoutTab';
import { StepsTab } from './components/tabs/StepsTab';
import { SleepTab } from './components/tabs/SleepTab';
import { MedicineTab } from './components/tabs/MedicineTab';
import { TrackingTab} from './components/tabs/TrackingTab';
import { ProfileTab} from './components/tabs/ProfileTab';
import { JourneyTab} from './components/tabs/JourneyTab';

export default function App() {
   const [activeTab, setActiveTab] = useState('home');
  // ... (keep existing state and functions)

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'food':
        return <FoodTab />;
      case 'workout':
        return <WorkoutTab />;
      case 'tracking':
        return <TrackingTab />;
      case 'journey':
        return <JourneyTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return null;
    }
  };


      return (
    <div className="min-h-screen bg-gray-50">
      {/* <Header title={getTabTitle()} /> */}
      <main className="pt-16 pb-20">
        {renderActiveTab()}
      </main>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
  // ... (rest of the component remains the same)
}