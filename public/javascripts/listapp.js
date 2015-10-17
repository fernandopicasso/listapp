var dataList = ["foo"];

$(document).ready(function () {
		
	// Dynamically generate list
	(function () {		
		$.get("/list/fernando", function (data) {
			dataList = data.data;
			updateList();
		});		
	})();	
});

function getListItem(index, text) {
	var controlIndex = index + 1;
	return '<li>' + text + '<input class="checkbox" name="checkbox' + controlIndex + 
		'" value="value' + controlIndex + '" type="checkbox"></li>';
}

function updateList() {
	$('main ul li').remove();
	var itemListLength = dataList.length;
	for (var i = 0; i < itemListLength; i++) {
		$('main ul').append(getListItem(i, dataList[i]));
	}
}

$("#addItem").click(function() {
	var nextIndex = dataList.length + 1;
	dataList.push("New Item");
	updateList();
});