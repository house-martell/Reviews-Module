const express = require('express');
const parser = require('body-parser');
const path = require('path');
const connection = require('../database/index.js');
const {getReviews} = require('../database/index.js');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({useNewUrlParser: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/Reviews/:id', (req, res) => {
  let {id} = req.params;
  getReviews(id, (data) => res.status(200).send(data));
});

module.exports = app;