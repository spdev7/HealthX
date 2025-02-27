import { supabase } from './supabase';

export const auth = {
  async signInWithGoogle(token: string) {
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token,
    });
    
    if (error) throw error;
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  async getSession() {
    const { data: { session } } = await supabase.auth.getSession();
    return session;
  },
};