
import express from "express";
import { getTodoController, postTodoController, putTodoController, deleteTodoController} 
from "../controller/todo.controller.js";

const router = express.Router();

router.get("/", getTodoController);
router.post("/", postTodoController);
router.put("/:id", putTodoController);
router.delete("/:id", deleteTodoController);

export default router;