const Task = require('../models/Task'); // Assuming you have a Task model

const taskController = {
  // Controller method for creating a new task
  createTask: async (req, res) => {
    try {
      // Extract task data from the request body
      const { title, description, userId } = req.body;

      // Create a new task object
      const newTask = new Task({
        title,
        description,
        userId, // Assuming userId is associated with the task
        // Add any other fields as needed
      });

      // Save the new task to the database
      await newTask.save();

      // Respond with the newly created task
      res.status(201).json(newTask);
    } catch (error) {
      // Handle any errors that occur during task creation
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  // Other controller methods (e.g., deleteTask, updateTask) can be defined here
};

module.exports = taskController;
