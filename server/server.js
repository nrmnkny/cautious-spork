require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reviewsRouter = require('./routes/reviews'); 

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); 

// Use routes
app.use('/api/reviews', reviewsRouter);

// Handle 404
app.use((req, res) => {
    res.status(404).send('404: Page not found');
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
