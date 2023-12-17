import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

router.post('/update-balance', userController.updateUserBalance);

export default router;
