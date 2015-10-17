
$(document).ready(function () {
		
	// Dynamically generate list
	(function () {
		$('main ul li').remove();
		
		$.get("/list/my", function (data) {
			var itemListLength = data.length;
			for (var i = 0; i < itemListLength; i++) {
				$('main ul').append(getListItem(i, data[i]));			
			}
		});
	})();

	function getListItem(index, text) {
		var controlIndex = index + 1;
		return '<li>' + text + '<input class="checkbox" name="checkbox' + controlIndex + 
			'" value="value' + controlIndex + '" type="checkbox"></li>';
	}

});