import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { userRouter } from './routes/users.js';
import { trackingRouter } from './routes/tracking.js';
import { workoutRouter } from './routes/workouts.js';
import { foodRouter } from './routes/food.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRouter);
app.use('/api/tracking', trackingRouter);
app.use('/api/workouts', workoutRouter);
app.use('/api/food', foodRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});