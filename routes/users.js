const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for user registration
router.post('/signup', userController.signup);

// Route for user login
router.post('/login', userController.login);

// Route to fetch user profile
router.get('/:id', userController.getUser);

module.exports = router;
