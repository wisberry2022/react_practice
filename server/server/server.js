const express = require('express');
const app = express();
const path = require('path');
const router = require('./Router/router');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/addComment', router);

port = 5050;

app.listen(port, () => {
  console.log(`listening on ${port}`);
})

