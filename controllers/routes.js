const express = require('express');
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyToken")

const eventController = require('./eventController');
const userCtrl = require("./userController")

// GET - Retrieve all events
router.get('/events', eventController.getEvent); 

// POST - Create a new event
router.post('/events', eventController.createEvent); 

// PUT - Update an event by ID
router.put('/events/:id', eventController.updateEvent); 

// DELETE - Delete an event by ID
router.delete('/events/:id', eventController.deleteEvent); 

router.post("/auth/signup", userCtrl.signup)
router.post("/auth/login", userCtrl.login)
router.get("/user/:id", verifyToken, userCtrl.getUser)

module.exports = router;
