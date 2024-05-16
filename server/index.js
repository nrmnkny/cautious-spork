require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reviewsRouter = require('./routes/reviews');
const authRouter = require('./routes/authRoutes');

const app = express();

// Update the CORS configuration to allow requests from your frontend domains
const allowedOrigins = [
    'http://localhost:3000', 
    'https://rhythmiccli.vercel.app',
    'https://rhythmiccli-faz6tghx2-quirkscodes-projects.vercel.app',
    'https://rhythmicserver.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin, such as mobile apps or curl requests
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
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
