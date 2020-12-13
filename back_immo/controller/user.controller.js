const User = require('../models').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.user_add = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            throw err
        }
        let user = req.body;
        user.password = hash;
        User.create(user)
            .then(data => res.status(201).json(data))
            .catch(err => console.log(err))
    })
}
exports.user_login = (req, res, next) => {
    User.findOne({
        where: {
            name: req.body.name
        }
    })
        .then(user => {
            if (user) {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) return res.status(500).json(error)
                    else {
                        if (result) {
                            const token = jwt.sign({ id: user.id, name: user.name, roleId: user.roleId  }, process.env.SECRET_PHRASE, { expiresIn: '365d' })
                            res.status(200).json({
                                token: token
                            })
                        }
                        else {
                            return res.json({ message: 'FAIL' })
                        }
                    }
                })
            } else {
                res.status(404).json({ message: 'bad login and or password' })
            }
        })
        .catch(error => {
            res.status(500).json(error);
        })
}