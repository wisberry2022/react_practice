const express = require('express');
const app = express();
const path = require('path');
const router = require('./Router/router');

app.use(express.static(path.join(__dirname, '../build')));
app.get('/test', router);


app.listen(5050, () => { console.log('listening on 5050') });