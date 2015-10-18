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

exports.updateListForUser = function (username, list, datafile) {
	var fs = require('fs');
	var data = JSON.parse(fs.readFileSync(datafile, 'utf8'));
	
	var dataLength = data.length;
	for (var i = 0; i < dataLength; i++) {
		var current = data[i];
		if (username === current.username) {
			current.data = [];
			var listLength = list.length;
			for (var j = 0; j < listLength; j++) {
				current.data.push(list[j]);
			}
			fs.writeFile(datafile, JSON.stringify(data, null, 2), function (err) {
				if (err) {
					return console.log(err);
				}			 	
			});
		}
	}
};