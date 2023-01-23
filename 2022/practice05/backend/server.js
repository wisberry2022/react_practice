const express = require('express');
const path = require('path');
const app = express();
const test = require('./Router/router');

app.use(express.static(path.join(__dirname, '../build')));
app.get('/test', test);

const port = 5000;
app.listen(port, () => { console.log(`Listening on port ${port}`, __dirname) });