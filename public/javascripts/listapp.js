var dataList = ["foo"];
var username = "fernando";

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

$("#newItemText").keypress(function(e) {
    if(e.which == 13) {
    	var enteredValue = this.value.trim();
    	if (enteredValue.length > 0) {
	    	e.preventDefault();
	        var nextIndex = dataList.length + 1;
			dataList.push(enteredValue);
			updateList();

			$.ajax({
			    type: "PUT",
			    url: "/list/fernando",
			    contentType: "application/json",
			    data: JSON.stringify(dataList)
			});

		}
		this.value = '';
    }
});

