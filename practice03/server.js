const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

const key = 'KcPvvyVEaqORzpTkpeX8%2Bk36SeU1KPEAdUK7gVD%2BKt6hYBONhpq0ZQ8NcPEQR6O%2FuYEdi4c030PNJp5TL66XLw%3D%3D';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

app.use(express.static(path.join(__dirname, '/build')));

const currentPut = async () => {
  let response;
  try {
    response = await axios.get(
      `http://data.humetro.busan.kr/voc/api/open_api_process.tnn?serviceKey=${key}&day=1&updown=1&act=json&stime=1350&enum=5&act=json&scode=105`)
  } catch (e) {
    console.log(e)
  }
  return response;
}

app.get("/test", (req, res) => {
  currentPut().then((response) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(response.data);
  })
})

app.listen(8080, () => {
  console.log('listening on 8080');
  console.log('success connect!');
})

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/build/index.html'));
// })