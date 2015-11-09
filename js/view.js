function View () {

	View.prototype.addImage = function(url, class_name, target) {
		console.log($(target))
		$(target).append('<img src="imgs/' + url + '" class="' + class_name + '"/>')
	};
}