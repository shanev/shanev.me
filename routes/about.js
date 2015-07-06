var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  var file = path.join(__dirname, '../public', 'about.html');
  res.sendfile(file);
});

module.exports = router;
