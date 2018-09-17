var express = require('express');
var router = express.Router();

/* GET chitkara listing. */
router.get('/', function(req, res, next) {
  res.render('chitkara', { title: 'ejs' });
});


router.get('/home', function(req, res, next) {
    res.render('home', { title: 'Home' });
  });



module.exports = router;
