require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./database');
const controllers = require('./controllers/index.js');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB database
connectDB();

// Routes
app.use('/api', controllers);

app.get('/', (req, res) => {
    res.send('This is working');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
