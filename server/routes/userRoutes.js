const userController = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.route('/get-users').get(userController.getUsers);
router.route('/register').post(userController.userSignup);

module.exports = router;