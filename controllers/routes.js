const express = require('express');
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken");

const eventController = require('./eventController');
const userController = require("./userController");

// Events Routes
router.get('/events', verifyToken, eventController.getEvent); // Retrieve all events
router.post('/events', verifyToken, eventController.createEvent); // Create a new event
router.put('/events/:id', verifyToken, eventController.updateEvent); // Update an event by ID
router.delete('/events/:id', verifyToken, eventController.deleteEvent); // Delete an event by ID

// User Authentication Routes
router.post("/auth/signup", userController.signup); // User sign-up
router.post("/auth/login", userController.login); // User login

// Protected Route: Requires authentication token
router.get("/user/:id", verifyToken, userController.getUser); // Get user by ID

module.exports = router;
