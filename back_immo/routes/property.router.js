const express = require('express');
const router = express.Router();
const property_controller = require('../controller/property.controller');

router.get('/',property_controller.property_list);
router.get('/:id',property_controller.property_detail);
router.post('/add',property_controller.property_add);
router.put('/:id',property_controller.property_edit);
router.delete('/:id',property_controller.property_delete);

module.exports = router;