'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('PropertyKeywords', {
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
        unique: 'PropertyKeyword'
      },
      KeywordId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Keywords',
          key: 'id'
        },
        unique: 'PropertyKeyword'
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
        'ALTER TABLE `PropertyKeywords` ADD UNIQUE `unique_index`(`PropertyId`, `KeywordId`)'
      );
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PropertyKeywords');
  }
};