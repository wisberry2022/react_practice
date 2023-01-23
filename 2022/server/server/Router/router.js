const express = require('express');
const app = express();
const Router = express.Router();

const path = require('path');

const dataSet = [];
Router.post('/addComment', (req, res) => {
  dataSet.push(req.body);
  console.log(dataSet);
  res.send('POST REQUEST SUCCESS');
})

module.exports = Router;