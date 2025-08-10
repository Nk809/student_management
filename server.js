
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/students', studentRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Student Management System API is running...');
});

// Start server
app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
});
