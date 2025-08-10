const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your MySQL username
    password: '', // your MySQL password
    database: 'student_db'
});

db.connect(err => {
    if (err) {
        console.error('❌ Database connection failed:', err);
        return;
    }
    console.log('✅ Connected to MySQL Database');
});

module.exports = db;
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',      // default XAMPP MySQL user
    password: '',      // default is empty
    database: 'student_db'
});
