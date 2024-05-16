const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../db');
const router = express.Router();
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to authenticate token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Middleware to authenticate admin
function authenticateAdmin(req, res, next) {
    if (!req.user || !req.user.isAdmin) {
        return res.status(403).json({ message: 'Access denied: Admins only' });
    }
    next();
}

// Register User
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    db.query('INSERT INTO Users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        const token = jwt.sign({ userId: results.insertId }, JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token });
    });
});

// Login User
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM Users WHERE username = ?', [username], async (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
            return res.status(401).json({ message: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: results[0].user_id, isAdmin: results[0].is_admin }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });
});

module.exports = router;
module.exports.authenticateToken = authenticateToken;
module.exports.authenticateAdmin = authenticateAdmin;
