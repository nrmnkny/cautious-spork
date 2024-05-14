const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the MySQL server:', err.message);
        return;
    }
    console.log('Connected to the MySQL server.');
});

module.exports = connection;
