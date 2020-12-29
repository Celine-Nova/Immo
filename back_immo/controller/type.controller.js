const Type = require('../models').Type;



exports.type_list = (req, res, next) => {
    Type.findAll({
        attributes: ['id', 'name'],

    })
        .then(type => res.status(200).json(type))
        .catch(err => console.log(err))
}

exports.type_add = (req, res, next) => {
    const type = req.body;
    Type.create(type)
        .then(typeCreated => {
            res.status(201).json(typeCreated)
        })
        .then(typeCreated => res.status(201).json(typeCreated))
        .catch(err => console.log(err))
}
exports.type_detail = (req, res, next) => {
    const id = req.params.id;
    // Type.findOne({
    //   where: {
    //     id: id
    //   }
    // })
    Type.findByPk(id)
        .then(type => res.status(200).json(type))
        .catch(err => console.log('passe pas'))
}
exports.type_edit = (req, res, next) => {
    const id = req.params.id;
    const type = req.body;
    Type.update(type, {
        where: {
            id: id
        }
    })
        .then(() => {
            res.status(200).json({ message: 'type updated' })
        })
        .catch(err => console.log(err))
}
exports.type_delete = (req, res, next) => {
    const id = req.params.id;
    Type.destroy({
        where: {
            id: id
        }
    })
        .then(type => res.status(200).json({ message: 'type deleted' }))
        .catch(err => console.log(err))
}