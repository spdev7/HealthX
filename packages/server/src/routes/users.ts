import { Router } from 'express';
import { supabase } from '../lib/supabase.js';

const router = Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

router.post('/', async (req, res) => {
  const { data, error } = await supabase
    .from('users')
    .insert(req.body)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json(data);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  
  const { data, error } = await supabase
    .from('users')
    .update(req.body)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

export const userRouter = router;