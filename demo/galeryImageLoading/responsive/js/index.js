RD.clientFnManager.set("runIndex", function () {
	'use strict';

	function moveImagesInsideHyperlinks() {
		var $imagesToMove = jQ('.galery-item > img');

		$imagesToMove.each(function(index, img) {
			var $img = jQ(img);
			var $galeryItem = $img.closest('.galery-item');
			var $hyperlink = $img.siblings('a');

			if ($hyperlink.length !== 0) {
				$hyperlink.append($img);
			}

			$galeryItem.addClass('processed');

			console.log('Galery item has been processed');
		});
	}

	moveImagesInsideHyperlinks();

	RD.ajaxWrapper.registerCallBack(/galeryData/, function () {
		setTimeout(function() {
			console.log('AJAX has been wrapped.');
			moveImagesInsideHyperlinks();
		}, 0);
	});

	RD.ajaxWrapper.startListening();
});