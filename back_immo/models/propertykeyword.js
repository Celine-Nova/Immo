'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PropertyKeyword extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PropertyKeyword.belongsTo(models.Property);
      PropertyKeyword.belongsTo(models.Keyword);
    }
  };
  PropertyKeyword.init({
  }, {
    sequelize,
    modelName: 'PropertyKeyword',
  });
  return PropertyKeyword;
};