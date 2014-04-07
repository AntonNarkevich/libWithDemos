RD.clientFnManager.set("runIndex", function () {

	var bounds = RD.boundManager.getBounds();

	var leftCallback = RD.ajaxWrapper.registerCallBack(/leftMenuData/, function () {
		setTimeout(function() {
			console.log('Left menu AJAX has been wrapped.');
		}, 0);
	});

	var rightCallback = RD.ajaxWrapper.registerCallBack(/rightMenuData/, function () {
		setTimeout(function() {
			console.log('Right menu AJAX has been wrapped.');
		}, 0);
	});

	var callbacksGroup = [];

	callbacksGroup.push(leftCallback, rightCallback);

	RD.ajaxWrapper.waitForGroup(callbacksGroup, function () {
		setTimeout(function() {
			console.log('AJAX Group has been wrapped.');

			(function buildMobileMenu() {
				var $lists = jQ('.lists');
				var $lis = $lists.find('.left-list li, .right-list li');
				var $liClones = $lis.clone();

				var $mobileMenu = jQ('<ul class="mobile-list"></ul>');
				$mobileMenu.append($liClones);

				$lists.append($mobileMenu);

				console.log('Mobile menu has been built.');
			}());

		}, 0);
	});

	RD.ajaxWrapper.startListening();
});