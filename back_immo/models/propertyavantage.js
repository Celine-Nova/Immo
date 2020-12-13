'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PropertyAvantage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PropertyAvantage.belongsTo(models.Property);
      PropertyAvantage.belongsTo(models.Avantage);
    }
  };
  PropertyAvantage.init({
  }, {
    sequelize,
    modelName: 'PropertyAvantage',
  });
  return PropertyAvantage;
};