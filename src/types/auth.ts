export interface UserFormData {
  fullName: string;
  gender: 'male' | 'female' | 'other';
  dateOfBirth: string;
  age: number;
  weight: number;
  height: number;
  email: string;
  fitnessObjective: {
    primary: string;
    specific: string;
  };
  goalTimeframe: number;
  goalImportance: string;
  supplements: {
    current: string;
    willing: string;
  };
  lifestyle: {
    residence: string;
    foodChoice: string;
    foodPreparation: string;
  };
  trainingHistory: {
    hasExperience: boolean;
    experience: string;
    preference: string;
  };
  health: {
    heartCondition: {
      has: boolean;
      details: string;
    };
    jointCondition: {
      has: boolean;
      details: string;
    };
    recentSurgery: {
      has: boolean;
      details: string;
    };
    medication: {
      taking: boolean;
      details: string;
    };
    foodAllergy: {
      has: boolean;
      details: string;
    };
    lifestyle: {
      drinks: boolean;
      smokes: boolean;
      frequency: string;
    };
  };
  additionalInfo: string;
  photos: {
    front?: File;
    side?: File;
    back?: File;
  };
}