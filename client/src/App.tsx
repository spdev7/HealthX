import React, { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomeTab } from './components/tabs/HomeTab';
import { FoodTab } from './components/tabs/FoodTab';
import { WorkoutTab } from './components/tabs/WorkoutTab';
import { StepsTab } from './components/tabs/StepsTab';
import { SleepTab } from './components/tabs/SleepTab';
import { MedicineTab } from './components/tabs/MedicineTab';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const getTabTitle = () => {
    switch (activeTab) {
      case 'home':
        return 'Progress Overview';
      case 'food':
        return 'Food Tracking';
      case 'workout':
        return 'Workout Tracking';
      case 'steps':
        return 'Steps Tracking';
      case 'sleep':
        return 'Sleep Tracking';
      case 'medicine':
        return 'Medicine Tracking';
      default:
        return 'Fitness Tracker';
    }
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab />;
      case 'food':
        return <FoodTab />;
      case 'workout':
        return <WorkoutTab />;
      case 'steps':
        return <StepsTab />;
      case 'sleep':
        return <SleepTab />;
      case 'medicine':
        return <MedicineTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={getTabTitle()} />
      <main className="pt-16 pb-20">
        {renderActiveTab()}
      </main>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;