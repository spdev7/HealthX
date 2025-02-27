/*
  # Initial Schema Setup

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - name (text)
      - profile_data (jsonb)
      - created_at (timestamp)
      
    - tracking_items
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - name (text)
      - completed (boolean)
      - streak (integer)
      - last_completed (date)
      - created_at (timestamp)

    - workouts
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - type (text)
      - duration (integer)
      - calories_burned (integer)
      - notes (text)
      - created_at (timestamp)

    - food_entries
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - name (text)
      - calories (integer)
      - protein (integer)
      - carbs (integer)
      - fat (integer)
      - created_at (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  profile_data jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Tracking items table
CREATE TABLE tracking_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  completed boolean DEFAULT false,
  streak integer DEFAULT 0,
  last_completed date,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE tracking_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own tracking items"
  ON tracking_items
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Workouts table
CREATE TABLE workouts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  type text NOT NULL,
  duration integer NOT NULL,
  calories_burned integer,
  notes text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE workouts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own workouts"
  ON workouts
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);

-- Food entries table
CREATE TABLE food_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  calories integer NOT NULL,
  protein integer NOT NULL,
  carbs integer NOT NULL,
  fat integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE food_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can CRUD own food entries"
  ON food_entries
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id);