const express = require('express');
const multer = require('multer');
const path = require('path');
const { body, validationResult } = require('express-validator');
const db = require('../db');
const { authenticateToken } = require('./authRoutes');

const router = express.Router();

// Set up multer for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Get reviews
router.get('/', (req, res) => {
    let { sort, title, user_id } = req.query;
    let sql = 'SELECT * FROM Reviews WHERE 1 = 1';
    let params = [];

    if (title) {
        title = `%${title}%`;
        sql += ' AND title LIKE ?';
        params.push(title);
    }

    if (user_id) {
        sql += ' AND user_id = ?';
        params.push(user_id);
    }

    if (sort) {
        sql += ` ORDER BY created_at ${sort === 'latest' ? 'DESC' : 'ASC'}`;
    }

    db.query(sql, params, (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error retrieving reviews from database', details: err.message });
            return;
        }
        res.json(results);
    });
});

// Get a single review by ID
router.get('/:review_id', (req, res) => {
    const { review_id } = req.params;

    const sql = 'SELECT * FROM Reviews WHERE review_id = ?';
    db.query(sql, [review_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving the review from database', details: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json(results[0]);
    });
});

// Post a new review
router.post('/', authenticateToken, upload.single('image'), [
    body('title').not().isEmpty().trim().escape(),
    body('summary').not().isEmpty().trim().escape(),
    body('detailedAnalysis').not().isEmpty().trim().escape(),
    body('lyrics').not().isEmpty().trim().escape(),
    body('themes').not().isEmpty().trim().escape(),
    body('personalImpressions').not().isEmpty().trim().escape()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, summary, detailedAnalysis, lyrics, themes, personalImpressions } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const user_id = req.user.userId;

    const sql = 'INSERT INTO Reviews (title, summary, detailedAnalysis, lyrics, themes, personalImpressions, user_id, image_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [title, summary, detailedAnalysis, lyrics, themes, personalImpressions, user_id, imageUrl], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error saving the review', details: err.message });
        } else {
            res.status(201).json({ reviewId: result.insertId, message: 'Review posted successfully' });
        }
    });
});

module.exports = router;
