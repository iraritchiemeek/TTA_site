function View () {

	View.prototype.addImage = function(image_name, suffix, class_name, target) {
		$(target).prepend('<img src="imgs/' + image_name + '.' + suffix + '" class="' + class_name + '" id="' + image_name + '"/>')
	};

	View.prototype.displayStrategy = function(strategy) {
		var strategy = $(strategy)[0].value
		$('#' + strategy +'_text').show()
	};
}