import userSchema from '../schema/userSchema.js';

export const up = async ({ context: queryInterface }) => {
  await queryInterface.createTable('users', userSchema);
};

export const down = async ({ context: queryInterface }) => {
  await queryInterface.dropTable('users');
};
