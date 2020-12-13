const express = require('express');
const router = express.Router();
const avantage_controller = require('../controller/avantage.controller');

router.get('/', avantage_controller.avantage_list);
// router.get('/:id', singer_controller.singer_detail);

router.post('/', avantage_controller.avantage_add);

module.exports = router;