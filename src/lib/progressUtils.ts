export const calculateStars = (completionPercentage: number): number => {
  if (completionPercentage >= 90) return 5;
  if (completionPercentage >= 75) return 4;
  if (completionPercentage >= 50) return 3;
  if (completionPercentage >= 25) return 2;
  if (completionPercentage > 0) return 1;
  return 0;
};

export const getProgressColor = (completionPercentage: number): string => {
  if (completionPercentage >= 90) return 'bg-purple-900 dark:bg-purple-800';
  if (completionPercentage >= 75) return 'bg-purple-700 dark:bg-purple-600';
  if (completionPercentage >= 50) return 'bg-purple-500 dark:bg-purple-400';
  if (completionPercentage >= 25) return 'bg-purple-300 dark:bg-purple-200';
  return 'bg-purple-100 dark:bg-purple-50';
};