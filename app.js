// app.js
const express = require('express');
const sum = require('./sum');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js CI/CD app!');
});

app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a) || 0;
  const b = parseFloat(req.query.b) || 0;
  res.json({ result: sum(a, b) });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});