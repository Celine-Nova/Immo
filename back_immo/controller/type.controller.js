const Type = require('../models').Type;



exports.type_list = (req, res, next) =>{
    Type.findAll({
        attributes: ['id', 'name'],
       
        })
    .then(type =>res.status(200).json(type))
    .catch(err => console.log(err))
}

exports.type_add = (req, res, next) =>{
    const type = req.body;
    Type.create(type)
    .then(typeCreated =>{
        res.status(201).json(typeCreated)
    })
    .then(typeCreated=> res.status(201).json(typeCreated))
    .catch(err => console.log(err))
}