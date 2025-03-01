import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/authRoutes.js";

// Load environment variables from .env file
config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Middleware
app.use(json());

app.use(express.static(path.join(__dirname, "../client/dist")));

// app.get("/", (req, res) => {
//   // Serve frontend build
//   res.sendFile(path.join(__dirname, "dist", "index.html"));

//   // res.sendFile(__dirname + "/index.html");
//   // Middleware
// });
// Routes
app.get("/", (req, res) => {
  console.log(req.method);
  //   res.send("Hello World!");
  res.send("<h1>hello</h1>");
  // res.sendStatus  sends status code
});

app.get("/api/v1/data", (req, res) => {
  res.send("data");
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

app.post("/api/v1/data", (req, res) => {
  const newEntry = req.body;
  res.sendStatus(201);
});

app.use("/auth", authRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
