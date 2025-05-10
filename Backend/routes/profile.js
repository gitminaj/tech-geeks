import express from 'express';
import { updateProfile } from '../controller/profile.js';

const router = express.Router();

router.put('/update-profile', updateProfile);

export default router;

