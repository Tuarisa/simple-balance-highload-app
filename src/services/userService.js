import User from '../models/user.js';
import Sequelize from 'sequelize';

const updateUserBalance = async (userId, amount) => {
  const absoluteAmount = Math.abs(amount);
  const updateCondition = { where: { id: userId } };

  if (amount < 0) {
    updateCondition.where.balance = { [Sequelize.Op.gte]: absoluteAmount };
  }

  const updateResult = await User.increment(
    { balance: amount },
    updateCondition
  );

  const [[[updatedUser], affectedRows]] = updateResult;
  if (affectedRows === 0) {
    let error;
    if (amount < 0) {
      error = { status: 400, message: 'Insufficient balance' };
    } else {
      error = { status: 404, message: 'User not found' };
    }
    throw error;
  }

  return updatedUser.balance;
};

export default {
  updateUserBalance
};
