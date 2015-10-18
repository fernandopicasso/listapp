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
	console.log("Iterating through data.");
	for (var i = 0; i < dataLength; i++) {
		var current = data[i];
		console.log("Checking: " + current.username + " - " + username);
		if (username === current.username) {
			console.log("Removing elements.");
			current.data = [];
			var listLength = list.length;
			for (var j = 0; j < listLength; j++) {
				console.log("Pushing item: " + list[j]);
				current.data.push(list[j]);
			}
			console.log("Current: " + current);
			fs.writeFile(datafile, JSON.stringify(data, null, 2), function (err) {
				if (err) {
					return console.log(err);
				}			 	
			});
		}
	}
};