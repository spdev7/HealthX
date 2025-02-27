import { supabase } from './supabase';

const API_URL = '/api';

export const api = {
  users: {
    async getProfile(userId: string) {
      const response = await fetch(`${API_URL}/users/${userId}`);
      return response.json();
    },
    async updateProfile(userId: string, data: any) {
      const response = await fetch(`${API_URL}/users/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
  },
  tracking: {
    async getItems(userId: string) {
      const response = await fetch(`${API_URL}/tracking/${userId}`);
      return response.json();
    },
    async updateItem(userId: string, itemId: string, data: any) {
      const response = await fetch(`${API_URL}/tracking/${userId}/items/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
  },
  food: {
    async getEntries(userId: string) {
      const response = await fetch(`${API_URL}/food/${userId}`);
      return response.json();
    },
    async addEntry(data: any) {
      const response = await fetch(`${API_URL}/food`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
  },
  workouts: {
    async getWorkouts(userId: string) {
      const response = await fetch(`${API_URL}/workouts/${userId}`);
      return response.json();
    },
    async addWorkout(data: any) {
      const response = await fetch(`${API_URL}/workouts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return response.json();
    },
  },
};