const express = require('express');
const router = express.Router();
const user_controller = require('../controller/user.controller');
// const auth = require('../middleware/auth');

// router.get('/',auth(),user_controller.user_list);
// router.get('/:id',user_controller.user_detail);
router.post('/',user_controller.user_add);
router.post('/login',user_controller.user_login);
// router.put('/:id',user_controller.user_edit);
// router.delete('/:id',user_controller.user_delete);

module.exports = router;