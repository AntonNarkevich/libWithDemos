(function index($) {
	'use strict';

	function appendGaleryItem() {
		var $galery = $('.galery');
		var $newGaleryItem = $('<li class="galery-item"><a href="http://www.walgreens.com" target="_blank"><h3>Folded Words</h3></a><img src="original/img/galeryImage.jpg" alt="Galery item"/></li>')

		$galery.append($newGaleryItem);

		console.log('New Item has been added.');
	}

	function startLoading() {
		var appendTimer = setInterval(function () {
			$.get('original/data/galeryData.json', function() {
				console.log('Data for new item has been loaded.');
				appendGaleryItem();
			});
		}, 1000);

		setTimeout(function () {
			clearInterval(appendTimer);
		}, 5000);
	}

	var $startLoadingButton = $('.start-loading-button');
	$startLoadingButton.click(startLoading);
}(jQuery));