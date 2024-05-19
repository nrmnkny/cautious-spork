const express = require('express');
const db = require('../db');
const { authenticateToken, authenticateAdmin } = require('./authRoutes');
const router = express.Router();

// Get user profile
router.get('/profile', authenticateToken, (req, res) => {
    const userId = req.user.userId;
    db.query('SELECT username, email, role FROM Users WHERE user_id = ?', [userId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
    });
});

// Update user profile
router.put('/profile', authenticateToken, (req, res) => {
    const userId = req.user.userId;
    const { username, email } = req.body;
    db.query('UPDATE Users SET username = ?, email = ? WHERE user_id = ?', [username, email, userId], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Profile updated successfully' });
    });
});

// Admin: Change user role
router.put('/profile/role', authenticateToken, authenticateAdmin, (req, res) => {
    const { userId, role } = req.body;
    db.query('UPDATE Users SET role = ? WHERE user_id = ?', [role, userId], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'User role updated successfully' });
    });
});

module.exports = router;
