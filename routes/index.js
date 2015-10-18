var express = require('express');
var router = express.Router();
var listapp = require('../listapp.js');
var datafile = 'data/data.json';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/my', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/list/:name')
	.get(function (req, res) {
		var data = listapp.getListForUser(req.params.name, datafile);
		if (typeof data !== 'undefined') {
			return res.json(data);
		}
		
	  	res.statusCode = 404;
	    return res.send('Error 404: Invalid username');
	})
	.put(function (req, res) {
		var username = req.params.name;
		var data = req.body;
		listapp.updateListForUser(username, data, datafile);
		console.log(req.body);
	});

module.exports = router;