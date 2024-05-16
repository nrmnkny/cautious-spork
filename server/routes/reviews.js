const express = require('express');
const multer = require('multer');
const path = require('path');
const { body, validationResult } = require('express-validator');
const db = require('../db');
const { authenticateToken, authenticateAdmin } = require('./authRoutes');

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

// Admin: Post a new review
router.post('/', authenticateToken, authenticateAdmin, upload.single('image'), [
    body('title').not().isEmpty().trim().escape(),
    body('content').not().isEmpty().trim().escape()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, content } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const user_id = req.user.userId;

    const sql = 'INSERT INTO Reviews (title, content, user_id, image_url) VALUES (?, ?, ?, ?)';
    db.query(sql, [title, content, user_id, imageUrl], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error saving the review', details: err.message });
        } else {
            res.status(201).json({ reviewId: result.insertId, message: 'Review posted successfully' });
        }
    });
});

// User: Post a rating
router.post('/:reviewId/rating', authenticateToken, [
    body('rating').isInt({ min: 1, max: 5 })
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rating } = req.body;
    const { reviewId } = req.params;
    const user_id = req.user.userId;

    const sql = 'INSERT INTO Ratings (score, review_id, user_id) VALUES (?, ?, ?)';
    db.query(sql, [rating, reviewId, user_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving the rating', details: err.message });
        }
        res.status(201).json({ message: 'Rating posted successfully' });
    });
});

// User: Post a comment
router.post('/:reviewId/comments', authenticateToken, [
    body('content').not().isEmpty().trim().escape()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { content } = req.body;
    const { reviewId } = req.params;
    const user_id = req.user.userId;

    const sql = 'INSERT INTO Comments (content, review_id, user_id) VALUES (?, ?, ?)';
    db.query(sql, [content, reviewId, user_id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving the comment', details: err.message });
        }
        res.status(201).json({ message: 'Comment posted successfully' });
    });
});

// Get a single review by ID
router.get('/:reviewId', (req, res) => {
    const { reviewId } = req.params;

    const sql = 'SELECT * FROM Reviews WHERE review_id = ?';
    db.query(sql, [reviewId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error retrieving the review from database', details: err.message });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json(results[0]);
    });
});

module.exports = router;
