import User from '../models/user.js';
import Sequelize from 'sequelize';

const updateUserBalance = async (userId, amount) => {
  const operation = amount < 0 ? '-' : '+';
  const absoluteAmount = Math.abs(amount);
  const updateCondition = { where: { id: userId } };

  if (amount < 0) {
    updateCondition.where.balance = { [Sequelize.Op.gte]: absoluteAmount };
  }

  const updateResult = await User.update(
    { balance: Sequelize.literal(`balance ${operation} ${absoluteAmount}`) },
    updateCondition
  );

  let error;
  if (updateResult[0] === 0) {
    if (amount < 0) {
      error = { status: 400, message: 'Insufficient balance' };
    } else {
      error = { status: 404, message: 'User not found' };
    }
    throw error;
  }

  const updatedUser = await User.findByPk(userId);
  return updatedUser.balance;
};

export default {
  updateUserBalance
};
