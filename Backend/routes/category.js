import express from 'express';
import { categoryPageDetails, createCategory } from '../controller/category.js';
import restrict from '../middleware/restrict.js'
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/create-category',verifyToken ,restrict(['Admin']), createCategory);
router.get('/CategoryPageDetail', categoryPageDetails);

export default router;

