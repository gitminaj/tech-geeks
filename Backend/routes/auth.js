import express from 'express';
import { login, sendOTP, signup, changepassword } from '../controller/auth.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/sentotp', sendOTP);
router.post('/register', signup);
router.post('/login', login);
router.put('/changepassword', verifyToken, changepassword);

export default router;



