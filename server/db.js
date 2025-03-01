import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync(":memory:");

db.exec(`
  CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name TEXT, 
  email TEXT,
  password TEXT
  )
`);

// db.exec(`
//   CREATE TABLE entries (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     user_id INTEGER,
//     entry TEXT,
//     completed BOOLEAN DEFAULT 0
//     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
//     FOREIGN KEY(user_id) REFERENCES users(id)
//   )
// `);

export default db;
