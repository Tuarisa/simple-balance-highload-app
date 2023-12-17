import User from '../models/user.js';
import Sequelize from 'sequelize';

const updateUserBalance = async (userId, amount) => {
  let updateResult;

  if (amount < 0) {
    updateResult = await User.update(
      { balance: Sequelize.literal(`balance - ${Math.abs(amount)}`) },
      { where: { id: userId, balance: { [Sequelize.Op.gte]: Math.abs(amount) } } }
      );
  } else {
    updateResult = await User.update(
      { balance: Sequelize.literal(`balance + ${amount}`) },
      { where: { id: userId } } // No need to check the balance when it is increasing, assuming it will not exceed the max integer value
      );
  }

  // Проверка, была ли обновлена какая-либо строка
  if (updateResult[0] === 0) {
    if (amount < 0) {
      throw { status: 400, message: 'Insufficient balance' };
    } else {
      throw { status: 404, message: 'User not found' };
    }
  }

  // Получаем обновленный баланс
  const updatedUser = await User.findByPk(userId);
  return updatedUser.balance;
};


export default {
  updateUserBalance
};
