const Avantage = require('../models').Avantage;

exports.avantage_list = (req, res, next) =>{
    Avantage.findAll({
        attributes: ['id', 'name'],
       
        })
    .then(avantage =>res.status(200).json(avantage))
    .catch(err => console.log(err))
}

exports.avantage_add = (req, res, next) =>{
    const avantage = req.body;
    Avantage.create(avantage)
    .then(avantageCreated =>{
        res.status(201).json(avantageCreated)
    })
    .then(avantageCreated=> res.status(201).json(avantageCreated))
    .catch(err => console.log(err))
}