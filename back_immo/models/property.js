'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //Je veux mettre un TypeId à Propeerty. Type appartient à Property
      Property.belongsTo(models.Type);
      // relation ManyToMany
      Property.belongsToMany(models.Avantage, {through: models.PropertyAvantage});
      Property.hasMany(models.PropertyAvantage);
     
      Property.belongsToMany(models.Keyword, {through: models.PropertyKeyword});
      Property.hasMany(models.PropertyKeyword);
    }
  };
  Property.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sector: DataTypes.STRING,
    numberroom: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};