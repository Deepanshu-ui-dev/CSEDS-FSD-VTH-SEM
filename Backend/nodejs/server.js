const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send('<h1>This is ABES College</h1>');
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>We are students of CS DS - B</h1>');
});

// Address route
app.get('/address', (req, res) => {
    res.send('<h1>I am from Ghaziabad</h1>');
});

// 404 route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});
