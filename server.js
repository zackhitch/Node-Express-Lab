// import your node modules
const express = require('express');

const db = require('./data/db.js');

const server = express();

server.get('/api/posts', (req, res) => {
  db
    .find()
    .then(posts => {
      res.json(posts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.get('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  db
    .findById(id)
    .then(posts => {
      res.json(posts[0]);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/api/posts', (req, res) => {
  const title = req.body.title;
  const contents = req.body.contents;
  if (!title || !contents) {
    res.status(400);
    res.json({
      errorMessage: 'Please provide title and contents for the post.'
    });
    return;
  }
  db.insert({ title, contents });
});

// add your server code starting here
const port = 5010;
server.listen(port, () => console.log('API running on port 5010'));
