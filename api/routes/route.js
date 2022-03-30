const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth');
const userController = require('../controllers/controller');

router.get('/', userController.getAll)
router.post('/createuser', userController.createNewUser)
router.get('/:username', userController.getUser)
router.post('/login', userController.authLogin)
router.delete('/:username', userController.removeUser)
router.post('/createhabit', userController.createHabit)
router.delete('/:username/:habitname', userController.remove)
router.patch('/:username', userController.updateHabit)
router.post('/login', userController.authLogin)


module.exports = router
