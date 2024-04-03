const express = require('express');
const router = express.Router();

const eventController = require('./eventController');

// GET - Retrieve all events
router.get('/events', eventController.getEvent); 

// POST - Create a new event
router.post('/events', eventController.createEvent); 

// PUT - Update an event by ID
router.put('/events/:id', eventController.updateEvent); 

// DELETE - Delete an event by ID
router.delete('/events/:id', eventController.deleteEvent); 

module.exports = router;
