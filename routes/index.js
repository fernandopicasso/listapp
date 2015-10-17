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
	var listapp = require('../listapp.js');
	console.log(listapp);
	var data = listapp.getListForUser(req.params.name, 'data/data.json');
	if (typeof data !== 'undefined') {
		return res.json(data);
	}
	
  	res.statusCode = 404;
    return res.send('Error 404: Invalid username');
});

module.exports = router;