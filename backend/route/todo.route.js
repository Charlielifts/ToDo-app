
import express from "express";
import { getTodoController, postTodoController, putTodoController, deleteTodoController} 
from "../controller/todo.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getTodoController);
router.post("/", authMiddleware, postTodoController);
router.put("/:id", authMiddleware, putTodoController);
router.delete("/:id", authMiddleware, deleteTodoController);

export default router;