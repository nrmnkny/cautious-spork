const express = require('express');
const router = express.Router();
const connection = require('../db');

router.get('/', (req, res) => {
    connection.query('SELECT * FROM news', (error, results) => {
        if (error) {
            console.error('Error fetching news items:', error);
            res.status(500).json({ message: 'Failed to fetch news items' });
        } else {
            res.json(results);
        }
    });
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM news WHERE id = ?', [id], (error, results) => {
        if (error) {
            console.error('Error fetching news item:', error);
            res.status(500).json({ message: 'Failed to fetch news item' });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'News item not found' });
        } else {
            res.json(results[0]);
        }
    });
});
module.exports = router;
