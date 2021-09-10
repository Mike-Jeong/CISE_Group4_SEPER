// app.js

const express = require('express');

const app = express();

const path = require('path');

app.use('/api/data', function(req, res) {
    res.json({ greeting: 'Hello World' });
});

const port = process.env.PORT || 5000;
app.listen(port);

app.use(express.static(path.join(__dirname, 'frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

console.log(`server running at http ${port}`);
