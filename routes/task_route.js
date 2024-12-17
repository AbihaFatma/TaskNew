import express from "express";
import {
  createTask,
  getTasks,
  getTaskById,
  deleteTask,
  updateTask,
} from "../controllers/task.js";
import { Authenticate } from "../middleware/auth.js";

const router = express.Router();

router.post("/tasks", Authenticate, createTask);

router.get("/tasks", Authenticate, getTasks);

router.get("/tasks/:id", Authenticate, getTaskById);

router.put("/tasks/:id", Authenticate, updateTask);

router.delete("/tasks/:id", Authenticate, deleteTask);

export default router;
