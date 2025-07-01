const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const userValidate = require('../validators/userSchema.js');

router.get('/', userController.getAllUsers);
router.post('/',userValidate.createUserSchema, userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;