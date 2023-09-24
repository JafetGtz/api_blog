import { Router } from "express";
import {
  createPost,
  getPost,
  buscarPost
  
  
} from "../controllers/post.controller.js";

const router = Router();

// Routes
router.post("/", createPost);
router.get("/", getPost);
router.get('/buscar/:tipo/:palabra',buscarPost );






export default router;
