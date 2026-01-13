const express = require("express");
const app = express();
const fs = require('fs');
const path = require('path');

// Read JSON files - use path.join for proper file resolution
const leaderboardData = JSON.parse(fs.readFileSync(path.join(__dirname, 'leaderboard.json'), 'utf-8'));
const loginData = JSON.parse(fs.readFileSync(path.join(__dirname, 'login.json'), 'utf-8'));
const childData = JSON.parse(fs.readFileSync(path.join(__dirname, 'child-accounts.json'), 'utf-8'));
const courseData = JSON.parse(fs.readFileSync(path.join(__dirname, 'courses.json'), 'utf-8'));
const parentData = JSON.parse(fs.readFileSync(path.join(__dirname, 'parent-account.json'), 'utf-8'));

// CORS middleware
app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/leader', (req, res) => {
    res.json(leaderboardData);
});

app.get('/child', (req, res) => {
    res.json(childData);
});

app.get('/course', (req, res) => {
    res.json(courseData);
});

app.get('/login', (req, res) => {
    res.json(loginData);
});

app.get('/parent', (req, res) => {
    res.json(parentData);
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log('server running on port ' + PORT);
    });
}

// Export for Vercel
module.exports = app;
