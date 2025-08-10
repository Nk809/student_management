const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all students
router.get('/', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

// Get a single student by ID
router.get('/:id', (req, res) => {
    db.query('SELECT * FROM students WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results[0]);
    });
});

// Add a student
router.post('/', (req, res) => {
    const { name, roll_number, department, email } = req.body;
    db.query(
        'INSERT INTO students (name, roll_number, department, email) VALUES (?, ?, ?, ?)',
        [name, roll_number, department, email],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Student added successfully', id: result.insertId });
        }
    );
});

// Update a student
router.put('/:id', (req, res) => {
    const { name, roll_number, department, email } = req.body;
    db.query(
        'UPDATE students SET name=?, roll_number=?, department=?, email=? WHERE id=?',
        [name, roll_number, department, email, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ message: 'Student updated successfully' });
        }
    );
});

// Delete a student
router.delete('/:id', (req, res) => {
    db.query('DELETE FROM students WHERE id=?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Student deleted successfully' });
    });
});

module.exports = router;
