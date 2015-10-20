'use strict';

function Client() {
	return {
		getListItem: function (index, text) {
			var controlIndex = index + 1;
			return '<li>' + text + '<input class="checkbox" name="checkbox' + controlIndex + 
				'" value="value' + controlIndex + '" type="checkbox"></li>';
		}
	};
}

$(document).ready(function () {
	var dataList = [];
	var username = "fernando";
	var client = Client();

	var updateList = function () {
		$('main ul li').remove();
		var itemListLength = dataList.length;
		for (var i = 0; i < itemListLength; i++) {
			$('main ul').append(client.getListItem(i, dataList[i]));
		}
		$.ajax({
		    type: "PUT",
		    url: "/list/" + username,
		    contentType: "application/json",
		    data: JSON.stringify(dataList)
		});
	};

	$(".username").text(username);

	// Add keypress handler for adding new items to list
	$("#newItemText").keypress(function(e) {
	    if(e.which == 13) {
	    	var enteredValue = this.value.trim();
	    	if (enteredValue.length > 0) {
		    	e.preventDefault();
		        var nextIndex = dataList.length + 1;
				dataList.push(enteredValue);
				updateList();			
			}
			this.value = '';
	    }
	});

	// Dynamically generate list
	(function () {		
		$.get("/list/" + username, function (data) {
			dataList = data.data;
			updateList();
		});		
	})();

	// var checkboxes = $(".checkbox");
	// console.log(checkboxes);	
	$(document).on('change', '.checkbox', function () {
		if ($(this).is(":checked")) {
			var checkedValue = $(this).parent().text();

			var itemIndex = dataList.indexOf(checkedValue);
			if (itemIndex > -1) {
				dataList.splice(itemIndex, 1);
			}

			updateList();
		}
	});
});