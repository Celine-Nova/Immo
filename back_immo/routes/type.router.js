const express = require('express');
const router = express.Router();
const type_controller = require('../controller/type.controller');

router.get('/', type_controller.type_list);
// router.get('/:id', singer_controller.singer_detail);

router.post('/', type_controller.type_add);

module.exports = router;