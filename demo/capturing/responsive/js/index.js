RD.clientFnManager.set("runIndex", function () {

	var bounds = RD.boundManager.getBounds(),
		$imagesContainer = jQ(".slider");

	var slider = RD.controls.slider({
		originalElement: $imagesContainer,
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
});