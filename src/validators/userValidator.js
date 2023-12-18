import Joi from 'joi';

const updateUserBalanceSchema = Joi.object({
  userId: Joi.number().required(),
  amount: Joi.number().required()
});

export default {
  updateUserBalanceSchema
};
