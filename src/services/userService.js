import User from '../models/user.js';
import Sequelize from 'sequelize';

const updateUserBalance = async (userId, amount) => {
  let updateResult;

  if (amount < 0) {
    // Уменьшаем баланс, если новый баланс не станет отрицательным
    updateResult = await User.update(
      { balance: Sequelize.literal(`balance - ${Math.abs(amount)}`) },
      { where: { id: userId, balance: { [Sequelize.Op.gte]: Math.abs(amount) } } }
      );
  } else {
    // Увеличиваем баланс
    updateResult = await User.update(
      { balance: Sequelize.literal(`balance + ${amount}`) },
      { where: { id: userId } }
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
