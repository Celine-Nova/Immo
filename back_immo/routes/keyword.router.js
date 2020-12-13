const express = require('express');
const router = express.Router();
const key_word_controller = require('../controller/keyword.controller');

router.get('/', key_word_controller.key_word_list);
// router.get('/:id', singer_controller.singer_detail);

router.post('/', key_word_controller.key_word_add);

module.exports = router;