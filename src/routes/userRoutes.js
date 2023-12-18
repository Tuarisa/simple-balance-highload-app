import express from 'express';
import userController from '../controllers/userController.js';
import { updateUserBalanceSchema } from '../validators/userValidator.js';
import validate from '../middlwares/validate.js';

const router = express.Router();

router.post(
  '/update-balance',
  validate(updateUserBalanceSchema),
  userController.updateUserBalance
);

export default router;
