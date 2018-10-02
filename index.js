const express = require('express');
const cors = require('cors');

const db = require('./data/db.js');

const server = express();

server.use(cors());

server.get('/', (req, res) => {
  res.send('<h1>Hello NODE EXPRESS LAB project</h1>');
});

server.get('/api/posts', (req, res) => {
  db.find()
    .then(posts => {
      res.json(posts);
    })
    .catch(err => res.send(err));
});

server.get('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(post => {
      res.json(post);
    })
    .catch(err => res.send(err));
});

const port = 8088;
server.listen(port, () => console.log(`\n=== API running on port ${port} ===`));
