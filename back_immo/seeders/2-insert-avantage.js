'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Avantages', [
      {
        name: 'Jardin',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Balcon',
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        name: 'Terrasse',
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
    return queryInterface.bulkDelete('Avantages', null, {})
  }
};
