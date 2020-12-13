const Property = require('../models').Property;
const Type = require('../models').Type;
const Avantage = require('../models').Avantage;
const Keyword = require('../models').Keyword;

//liste des biens
exports.property_list = (req, res, next) => {
  Property.findAll({
    attributes: ['id', 'title', 'price', 'sector', 'numberroom', 'description', 'picture'],
    include: [
      {
         model: Type,
         attributes: ['id','name'],
        //  through: { attributes: []} 
      }, 
      {
         model: Avantage,
         attributes: ['id','name'],
         through: { attributes: []} 
      },
       {
         model: Keyword,
         attributes: ['id','name'],
         through: { attributes: []} 
      }
    ]
  })
  .then( properties => res.status(200).json(properties))
  .catch(err => console.log(err))
}

exports.property_add = (req, res, next) => {
  const property = req.body;
  Property.create(property)
  .then(propertyCreated => {
    propertyCreated.setAvantages(req.body.Avantages)
    propertyCreated.setKeywords(req.body.Keywords)
  .then(propertyCreated => res.status(201).json(propertyCreated))
  .catch(err => console.log(err))

  })
  .catch(err => console.log(err))
}
exports.property_detail = (req, res, next) => {
  const id = req.params.id;
  // Property.findOne({
  //   where: {
  //     id: id
  //   }
  // })
  Property.findByPk(id)
    .then(property => res.status(200).json(property))
    .catch(err => console.log(err))
}
exports.property_edit = (req, res, next) => {
  const id = req.params.id;
  const property = req.body;
  Property.update(property, {
    where: {
      id: id
    }
  })
    .then(() => {
      res.status(200).json({ message: 'property updated' })
    })
    .catch(err => console.log(err))
}
exports.property_delete = (req, res, next) => {
  const id = req.params.id;
  Property.destroy({
    where: {
      id: id
    }
  })
    .then(property => res.status(200).json({ message: 'property deleted' }))
    .catch(err => console.log(err))
}