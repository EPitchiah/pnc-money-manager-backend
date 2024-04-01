const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const leaderboardData = JSON.parse(fs.readFileSync('./leaderboard.json', 'utf-8'));
const loginData = JSON.parse(fs.readFileSync('./login.json', 'utf-8'));
const childData = JSON.parse(fs.readFileSync('./child-accounts.json', 'utf-8'));
const courseData = JSON.parse(fs.readFileSync('./courses.json', 'utf-8'));
const parentData = JSON.parse(fs.readFileSync('./parent-account.json', 'utf-8'));




app.listen(PORT, () => {
    console.log('server running');
})

app.get('/leader', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(leaderboardData);
})

app.get('/child', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(childData);
})

app.get('/course', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(courseData);
})

app.get('/login', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(loginData);
})

app.get('/parent', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send(parentData);
})
