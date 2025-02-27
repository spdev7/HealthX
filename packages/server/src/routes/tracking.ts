import { Router } from 'express';
import { supabase } from '../lib/supabase.js';

const router = Router();

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  
  const { data, error } = await supabase
    .from('tracking_items')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

router.post('/:userId/items', async (req, res) => {
  const { userId } = req.params;
  const items = req.body.items.map((item: any) => ({
    ...item,
    user_id: userId
  }));

  const { data, error } = await supabase
    .from('tracking_items')
    .insert(items)
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json(data);
});

router.put('/:userId/items/:itemId', async (req, res) => {
  const { userId, itemId } = req.params;
  
  const { data, error } = await supabase
    .from('tracking_items')
    .update(req.body)
    .eq('id', itemId)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
});

export const trackingRouter = router;