var express = require('express');
var router = express.Router();

/* GET Chitkara univerisity dummy listing. */
router.get('/', function(req, res, next) {
  res.send('responded without a view');
});

module.exports = router;
