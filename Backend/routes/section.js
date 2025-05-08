import express from 'express';
import { createSection, getSectionById } from '../controller/section.js';

const router = express.Router();

router.post('/create-section', createSection);
router.post('/get-sectionById/:id', getSectionById);

export default router;