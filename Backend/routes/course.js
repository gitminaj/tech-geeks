import express from "express";
import { createCourse, getCourseById } from "../controller/course.js";
import { upload } from "../config/file-upload.js";
import { verifyToken } from "../middleware/auth.js";
import restrict from "../middleware/restrict.js";

const router = express.Router();

router.post(
  "/create-course",
  verifyToken,
  restrict(["Instructor"]),
  upload.single("thumbnail"),
  createCourse
);

router.get('/getCourseById/:id', getCourseById);

export default router;
