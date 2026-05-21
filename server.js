const express = require('express');
const path = require('path');

const app = express();
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`TODO App running at http://${HOST}:${PORT}`);
});
