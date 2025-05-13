import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { createReview } from '../controller/reviewAndRating.js';

const router = express.Router();

router.post('/create', verifyToken, createReview);

export default router;