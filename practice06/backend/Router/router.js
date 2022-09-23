const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  console.log(req.query);
  res.send('hello');
})

module.exports = router;