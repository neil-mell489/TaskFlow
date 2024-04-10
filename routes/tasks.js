// Import required modules
const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Define the route to handle the POST request to add a new task
router.post('/add', taskController.createTask);

// Export the router
module.exports = router;
