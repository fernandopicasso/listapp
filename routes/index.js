var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/my', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/list/:name', function (req, res) {
	var fs = require('fs');
	var data = JSON.parse(fs.readFileSync('data/data.json', 'utf8'));
	
	var dataLength = data.length;

	for (var i = 0; i < dataLength; i++) {
		var current = data[i];
		if (req.params.name === current.username) {
			return res.json(current);
		}
	}	
	
  	res.statusCode = 404;
    return res.send('Error 404: Invalid username');
});

module.exports = router;