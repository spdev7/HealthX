import express, { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../prismaClient.js";
import db from "../db.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  console.log("reach here");
  const { username, password } = req.body;
  console.log(username, password);
  const hashedPassword = bcrypt.hashSync(password, 8);

  try {
    // const insertUser = db.prepare(`INSERT INTO users (username, password)
    //     VALUES (?, ?)`);
    // const result = insertUser.run(username, hashedPassword);

    const user = await prisma.user.create({
      data: {
        task: defaultTodo,
        userId: user.id,
      },
    });
    // const defaultTodo = ``;
    // insertTodo.run(result.lastInsertRowid);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_TOKEN, {
      expiresIn: "24h",
    });
    res.status(201).json({ token });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(503);
  }
  res.sendStatus(201);
});

// router.post("login ");

export default Router;
