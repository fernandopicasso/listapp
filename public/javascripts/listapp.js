
$(document).ready(function () {
		
	(function () {
		$('main ul li').remove();
		$('main ul').append(getListItem(1, "Milk"));
		$('main ul').append(getListItem(2, "Onion"));
		$('main ul').append(getListItem(3, "Juice"));
		$('main ul').append(getListItem(4, "Bread"));
	})();

	function getListItem(index, text) {
		return '<li>' + text + '<input class="checkbox" name="checkbox' + index + '" value="value' + index + '" type="checkbox"></li>';
	}

});