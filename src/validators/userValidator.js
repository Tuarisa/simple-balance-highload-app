import Joi from 'joi';

export const updateUserBalanceSchema = Joi.object({
  userId: Joi.number().required(),
  amount: Joi.number().invalid(0).required()
});
