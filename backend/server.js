import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import todoRoutes from "./route/todo.route.js";
import cookieParser from "cookie-parser"
import authRoutes from "./route/auth.route.js";
import protectedRoutes from "./route/protected.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/api", protectedRoutes);


app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})