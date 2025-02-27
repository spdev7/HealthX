// ... (keep existing interfaces)

export interface WorkoutType {
  id: string;
  name: string;
  category: 'chest' | 'legs' | 'back' | 'shoulders' | 'arms' | 'core' | 'cardio';
  defaultReps?: number;
  defaultSets?: number;
}

export interface WorkoutSet {
  reps: number;
  weight?: number;
  status: 'completed' | 'skipped' | 'pending';
}

export interface WorkoutEntry {
  id: string;
  type: WorkoutType;
  sets: WorkoutSet[];
  timestamp: Date;
  notes?: string;
}

export interface UserProfile {
  email: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  photoUrl?: string;
  height?: number;
  weight?: number;
  goals?: string[];
}