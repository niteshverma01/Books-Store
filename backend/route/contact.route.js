import express from 'express';
import { createContact } from '../controller/contact.controller.js';

const router = express.Router();

// Route to handle contact form submission
router.post('/contact', createContact);

export default router;
