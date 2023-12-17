import sequelize from '../utils/sequelize.js';
import userSchema from '../schema/userSchema.js';

const User = sequelize.define('user', userSchema,  { timestamps: false });

export default User;
