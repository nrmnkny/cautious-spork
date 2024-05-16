require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reviewsRouter = require('./routes/reviews');
const authRouter = require('./routes/authRoutes'); 

const app = express();

app.use(cors({ origin: ['http://localhost:3000', 'https://your-frontend-project.vercel.app'] })); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Use routes
app.use('/api/reviews', reviewsRouter);
app.use('/api/auth', authRouter); 

// Handle 404
app.use((req, res) => {
    res.status(404).send('404: Page not found');
});

module.exports = app;
