const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/test', async (req, res) => {
  let data = await axios.get('https://openapi.naver.com/v1/search/movie.json', {
    params: {
      query: '왕의남자',
      yearfrom: '2001',
      yearto: '2022'
    },
    headers: {
      "X-Naver-Client-Id": 'sp4_5CZOPaDaXu10QRQ_',
      "X-Naver-Client-Secret": 'qTyZjcU3vX'
    }
  })
  for (log in data) {
    console.log("log :" + JSON.stringify(log));
    log == "data" && res.send(data[log])
  }
})

module.exports = router;