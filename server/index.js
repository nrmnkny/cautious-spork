require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reviewsRouter = require('./routes/reviews');
const authRouter = require('./routes/authRoutes');

const app = express();

// Update the CORS configuration to allow requests from your frontend domains
app.use(cors({
    origin: ['http://localhost:3000', 'https://rhythmiccli.vercel.app', 'https://rhythmiccli-faz6tghx2-quirkscodes-projects.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}));

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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
