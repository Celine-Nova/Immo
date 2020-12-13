'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        age: 38,
        email: 'Admin@immo.gmail',
        password: '$2y$10$U0dLmJlFUQZH4tqvgt.5b.LR/bhOT047zas5AcEiL/dy7rZ9WKLLO',
        telephone: 1102030405,
        RoleId: [1],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
