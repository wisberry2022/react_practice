const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  let data = req.query;
  console.log(data);
  res.send(data);
})

module.exports = router;