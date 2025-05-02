import express from 'express';
import { createTag } from '../controller/tags.js';
import restrict from '../middleware/restrict.js'
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/create-tag',verifyToken ,restrict(['Admin']), createTag);

export default router;

