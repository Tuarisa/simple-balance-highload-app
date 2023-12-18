import Sequelize from 'sequelize';

const userSchema = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  balance: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
};

export default userSchema;
