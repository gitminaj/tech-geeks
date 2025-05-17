import express from 'express';
import { getEnrolledCourses, getProfileByUserId, updatePicture, updateProfile } from '../controller/profile.js';
import { verifyToken } from '../middleware/auth.js';
import { upload } from '../config/file-upload.js';

const router = express.Router();

router.put('/update-profile/', verifyToken, updateProfile);
router.put('/update-picture/:profileId', verifyToken, upload.single('image') , updatePicture);
router.get('/get/:id', verifyToken, getProfileByUserId);
router.get('/get-enrolledCourses', verifyToken, getEnrolledCourses);

export default router;

