import { Router } from 'express';
import { supabase } from '../lib/supabase.js';

const router = Router();

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { data, error } = await supabase
    .from('workouts')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

router.post('/', async (req, res) => {
  const { data, error } = await supabase
    .from('workouts')
    .insert(req.body)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json(data);
});

export const workoutRouter = router;