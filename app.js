// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const userarticles = require('./routes/api/userarticles')
const moderarticles = require('./routes/api/moderarticles')
const app = express();

connectDB();

const path = require('path');

app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/userarticles', userarticles);
app.use('/api/moderarticles', moderarticles);



const port = process.env.PORT || 5000;
app.listen(port);

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

console.log(`server running at http ${port}`);
