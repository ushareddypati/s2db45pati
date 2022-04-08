var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('olavehicle', { title: 'Search Results : olavehicle page' });
});

module.exports = router;
