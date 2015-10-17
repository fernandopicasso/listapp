var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/my', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list/my', function (req, res) {
  res.send('{"list": [{"name": "name1", "value": "value1"}, {"name": "name2", "value": "value2"}]}');
});



module.exports = router;
