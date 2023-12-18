import userService from '../services/userService.js';
import userValidator from '../validators/userValidator.js';

const updateUserBalance = async (req, res) => {
  const { error } = userValidator.updateUserBalanceSchema.validate(req.body);
  if (error) {
    return res.status(400).send({ error: error.details[0].message });
  }

  const { userId, amount } = req.body;
  try {
    const updatedBalance = await userService.updateUserBalance(userId, amount);
    res.send({ balance: updatedBalance });
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message });
  }
};

export default {
  updateUserBalance
};
