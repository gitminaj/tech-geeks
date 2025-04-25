import express from 'express';
import { sendOTP, signup } from '../controller/auth.js'

const router = express.Router();

router.post('/sentotp', sendOTP);
router.post('/register', signup);

export default router;



