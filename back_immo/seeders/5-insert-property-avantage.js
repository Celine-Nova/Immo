'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PropertyAvantages', [
      {
        PropertyId: [3],
        AvantageId: [1],
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        PropertyId: [2],
        AvantageId: [1],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        PropertyId: [1],
        AvantageId: [2],
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('PropertyAvantages', null, {})
  }
};
