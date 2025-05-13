import express from 'express';
import { getProfileByUserId, updateProfile } from '../controller/profile.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.put('/update-profile', verifyToken, updateProfile);
router.get('/get/:id', verifyToken, getProfileByUserId);

export default router;

