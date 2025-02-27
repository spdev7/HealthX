import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { UserFormData } from '@/types/auth';
import { Camera } from 'lucide-react';

export const OnboardingForm = ({ onComplete }: { onComplete: (data: UserFormData) => void }) => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<UserFormData>();
  const [photos, setPhotos] = useState<UserFormData['photos']>({});

  const onSubmit = (data: UserFormData) => {
    onComplete({ ...data, photos });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  {...register('fullName', { required: 'Name is required' })}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Gender</label>
                <select
                  {...register('gender', { required: 'Gender is required' })}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Date of Birth</label>
                  <input
                    type="date"
                    {...register('dateOfBirth', { required: 'Date of birth is required' })}
                    className="w-full p-2 border rounded-lg dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Age</label>
                  <input
                    type="number"
                    {...register('age', { required: 'Age is required' })}
                    className="w-full p-2 border rounded-lg dark:bg-gray-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Weight (kg)</label>
                  <input
                    type="number"
                    step="0.1"
                    {...register('weight', { required: 'Weight is required' })}
                    className="w-full p-2 border rounded-lg dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Height (cm)</label>
                  <input
                    type="number"
                    {...register('height', { required: 'Height is required' })}
                    className="w-full p-2 border rounded-lg dark:bg-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Fitness Goals</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Primary Objective</label>
                <select
                  {...register('fitnessObjective.primary', { required: 'Objective is required' })}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700"
                >
                  <option value="">Select objective</option>
                  <option value="improve_health">Improve Current Health Status</option>
                  <option value="weight_gain">Weight Gain</option>
                  <option value="muscle_tone">Improve Muscle Tone</option>
                  <option value="sports">Sports Specific</option>
                  <option value="weight_loss">Fat/Weight Loss</option>
                  <option value="strength">Increase Strength</option>
                  <option value="stress">Stress Management</option>
                  <option value="muscle_mass">Increase Muscle Mass</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Specific Goal Details</label>
                <textarea
                  {...register('fitnessObjective.specific')}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700"
                  rows={3}
                  placeholder="Describe your specific goals..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Goal Timeframe (weeks)</label>
                <select
                  {...register('goalTimeframe')}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700"
                >
                  <option value="10">10 weeks</option>
                  <option value="12">12 weeks</option>
                  <option value="14">14 weeks</option>
                  <option value="24">24 weeks</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Health & Lifestyle</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Current Supplements</label>
                <textarea
                  {...register('supplements.current')}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700"
                  placeholder="List any supplements you currently take..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Willing to Take Supplements?</label>
                <textarea
                  {...register('supplements.willing')}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700"
                  placeholder="Your thoughts on taking supplements..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Residence Type</label>
                <select
                  {...register('lifestyle.residence')}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700"
                >
                  <option value="home">Home</option>
                  <option value="hostel">Hostel/PG</option>
                  <option value="flat">Flat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Food Choice</label>
                <select
                  {...register('lifestyle.foodChoice')}
                  className="w-full p-2 border rounded-lg dark:bg-gray-700"
                >
                  <option value="veg">Vegetarian</option>
                  <option value="non-veg">Non-Vegetarian</option>
                  <option value="veg-eggs">Vegetarian with Eggs</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Medical History</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Heart Condition</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      {...register('health.heartCondition.has')}
                      className="rounded"
                    />
                    <span>Do you have any heart conditions?</span>
                  </div>
                  {watch('health.heartCondition.has') && (
                    <textarea
                      {...register('health.heartCondition.details')}
                      className="w-full p-2 border rounded-lg dark:bg-gray-700"
                      placeholder="Please provide details..."
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Joint/Bone Conditions</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      {...register('health.jointCondition.has')}
                      className="rounded"
                    />
                    <span>Do you have any joint or bone conditions?</span>
                  </div>
                  {watch('health.jointCondition.has') && (
                    <textarea
                      {...register('health.jointCondition.details')}
                      className="w-full p-2 border rounded-lg dark:bg-gray-700"
                      placeholder="Please provide details..."
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Recent Surgery</label>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      {...register('health.recentSurgery.has')}
                      className="rounded"
                    />
                    <span>Have you had surgery in the past 6 months?</span>
                  </div>
                  {watch('health.recentSurgery.has') && (
                    <textarea
                      {...register('health.recentSurgery.details')}
                      className="w-full p-2 border rounded-lg dark:bg-gray-700"
                      placeholder="Please provide details..."
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Photos</h2>
            <div className="grid grid-cols-3 gap-4">
              {['front', 'side', 'back'].map((view) => (
                <div key={view} className="space-y-2">
                  <label className="block text-sm font-medium mb-1 capitalize">{view} View</label>
                  <div className="relative aspect-square border-2 border-dashed rounded-lg flex items-center justify-center overflow-hidden">
                    {photos[view as keyof typeof photos] ? (
                      <img
                        src={URL.createObjectURL(photos[view as keyof typeof photos]!)}
                        alt={`${view} view`}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <Camera className="mx-auto h-8 w-8 text-gray-400" />
                        <span className="text-sm text-gray-500">Upload photo</span>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setPhotos(prev => ({
                            ...prev,
                            [view]: file
                          }));
                        }
                      }}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold">Profile Setup</h1>
              <span className="text-sm text-gray-500">Step {step} of 5</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 5) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {renderStep()}

            <div className="mt-8 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-purple-600 hover:text-purple-700"
                >
                  Back
                </button>
              )}
              {step < 5 ? (
                <button
                  type="button"
                  onClick={() => setStep(step + 1)}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 ml-auto"
                >
                  Complete
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};