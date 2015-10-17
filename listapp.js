exports.getListForUser = function (username, datafile) {
	var fs = require('fs');
	var data = JSON.parse(fs.readFileSync(datafile, 'utf8'));
	
	var dataLength = data.length;

	for (var i = 0; i < dataLength; i++) {
		var current = data[i];
		if (username === current.username) {
			return current;
		}
	}
};