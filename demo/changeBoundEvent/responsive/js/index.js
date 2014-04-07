RD.clientFnManager.set("runIndex", function () {

	var $bannerWrapper = jQ('.banner-wrapper');
	var $banner = $bannerWrapper.find('img');
	var $collapseButton = $bannerWrapper.find('.collapse-button');

	(function appendCollapsingButton() {
		if ($collapseButton.length === 0) {
			$collapseButton = jQ('<div class="collapse-button"><span>Collapse\/Expand it</span></div>');

			$bannerWrapper.prepend($collapseButton);

			$collapseButton.click(function(){
				$banner.slideToggle();
			});
		}

		console.log('Collapsing button has been appended');
	})();

	RD.eventManager.on('boundChange', function(obj) {
		var allBounds = obj.bounds;

		console.log('boundChange handled');

		if (obj.curBound !== allBounds.phone) {
			$banner.show();
			console.log('Banner has been expanded');
		}
	});
});

