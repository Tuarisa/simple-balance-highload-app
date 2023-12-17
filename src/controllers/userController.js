import userService from '../services/userService.js';

const updateUserBalance = async (req, res) => {
  const { userId, amount } = req.body;
  console.log(userId, amount)

  try {
    const updatedBalance = await userService.updateUserBalance(userId, amount);
    res.send({ balance: updatedBalance });
  } catch (error) {
    res.status(error.status || 500).send(error.message);
  }
};

export default {
  updateUserBalance
};
