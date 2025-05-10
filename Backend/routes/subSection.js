import express from 'express';
import { createSubSection, getSubSectionById } from '../controller/subSection.js';
import { upload } from '../config/file-upload.js';

const router = express.Router();

router.post('/create-subSection', upload.single('videoUrl') ,createSubSection);
router.post('/get-byId/:id', getSubSectionById);

export default router;