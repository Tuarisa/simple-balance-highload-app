export const up = async ({ context: queryInterface }) => {
  await queryInterface.bulkInsert(
    'users',
    [
      {
        balance: 10000
      }
    ],
    {}
  );
};

export const down = async ({ context: queryInterface }) => {
  await queryInterface.bulkDelete('users', null, {});
};
