'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Properties', [
      {
        title: 'Bureau Volant',
        price: 350500,
        sector: 'Paris',
        numberroom: 2,
        picture: 'https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_960_720.jpg',
        description: 'Bureau situé au coeur du centre ville',
        TypeId: [3],
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        title: 'Maison Aquatique',
        price: 550500,
        sector: 'Arcachon',
        numberroom: 8,
        picture: 'https://cdn.pixabay.com/photo/2014/11/21/17/17/country-house-540796_960_720.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        TypeId: [1],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Appartement Geant ',
        price: 450500,
        sector: 'Rouen',
        numberroom: 4,
        picture: 'https://cdn.pixabay.com/photo/2012/03/04/00/43/architecture-22039_960_720.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        TypeId: [1],  
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
    return queryInterface.bulkDelete('Properties', null, {})
  }
};
