'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Keywords', [
      {
        name: 'Vue sur Mer',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Coup de coeur',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Bien exceptionnelle',
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
    return queryInterface.bulkDelete('Keywords', null, {})
  }
};
