RD.clientFnManager.set("runIndex", function () {

	var bounds = RD.boundManager.getBounds(),
		$slider = jQ(".slider");

	RD.controls.slider({
		originalElement: $slider,
		visibleFor: [
			bounds.phone,
			bounds.tablet
		],
		onCreationStart: function ($control) {
			if ($control.length) {
				RD.logger.log("start control creation")
			}
		},
		onCreationComplete: function ($control) {
			if ($control.length) {
				RD.logger.log("control was created")
			}
		}
	});

	RD.controls.fullSiteLink();
});