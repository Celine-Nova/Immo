const Keyword = require('../models').Keyword;

exports.key_word_list = (req, res, next) =>{
    Keyword.findAll({
        attributes: ['id', 'name'],
       
        })
    .then(keyword =>res.status(200).json(keyword))
    .catch(err => console.log(err))
}

exports.key_word_add = (req, res, next) =>{
    const keyword = req.body;
    Keyword.create(keyword)
    .then(keywordCreated =>{
        res.status(201).json(keywordCreated)
    })
    .then(keywordCreated=> res.status(201).json(keywordCreated))
    .catch(err => console.log(err))
}