'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('PropertyAvantages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PropertyId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Properties',
          key: 'id'
        },
        unique: 'PropertyAvantage'
      },
      AvantageId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Avantages',
          key: 'id'
        },
        unique: 'PropertyAvantage'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    // Unique 
    .then(function() {
      return queryInterface.sequelize.query(
        'ALTER TABLE `PropertyAvantages` ADD UNIQUE `unique_index`(`PropertyId`, `AvantageId`)'
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PropertyAvantages');
  }
};