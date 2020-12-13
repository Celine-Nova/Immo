'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PropertyKeywords', [
      {
        PropertyId: [2],
        KeywordId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        PropertyId: [3],
        KeywordId: [1],
        createdAt: new Date(),
        updatedAt: new Date()
      },  
      {
        PropertyId: [1],
        KeywordId: [2],
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
    return queryInterface.bulkDelete('PropertyKeywords', null, {})
  }
};
