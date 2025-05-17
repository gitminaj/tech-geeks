import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import { createReview, deleteReview, getAllReviews } from '../controller/reviewAndRating.js';

const router = express.Router();

router.post('/create', verifyToken, createReview);
router.get('/getAllReviews', getAllReviews);
router.delete('/delete/:id', deleteReview);

export default router;