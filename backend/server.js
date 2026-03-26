import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import todoRoutes from "./route/todo.route.js";
import cookieParser from "cookie-parser"
import pool from "./config/db.js";



const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})