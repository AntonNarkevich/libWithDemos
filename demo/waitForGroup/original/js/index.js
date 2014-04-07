(function index($) {
	'use strict';

	function buildLeftSidebar() {
		var $leftSidebar = $('.left-list');

		$leftSidebar.html('<li>Left menu item 1</li>\n<li>Left menu item 2</li>\n<li>Left menu item 3</li>\n<li>Left menu item 4</li>\n<li>Left menu item 5</li>');

		console.log('Left sidebar has been built.');
	}

	function buildRightSidebar() {
		var $leftSidebar = $('.right-list');

		$leftSidebar.html('<li>Right menu item 1</li>\n<li>Right menu item 2</li>\n<li>Right menu item 3</li>');

		console.log('Right sidebar has been built.');
	}

	setTimeout(function () {
		$.get("original/data/leftMenuData.json", function(data) {
			console.log('Left sidebar data has been loaded via AJAX.');

			buildLeftSidebar();

			setTimeout(function () {
				$.get("original/data/rightMenuData.json", function(data) {
					console.log('Right sidebar data has been loaded via AJAX.');

					buildRightSidebar();
				});
			}, 3000);
		});
	}, 3000);

}(jQuery));