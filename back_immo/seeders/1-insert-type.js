'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', [
      {
        name: 'Maison',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Appartement',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Bureau',
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
    return queryInterface.bulkDelete('Types', null, {})
  }
};
