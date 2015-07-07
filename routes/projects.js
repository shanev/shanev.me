var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  var file = path.join(__dirname, '../public', 'projects.html');
  res.sendfile(file);
});

module.exports = router;
