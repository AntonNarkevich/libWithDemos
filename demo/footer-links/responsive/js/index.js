RD.clientFnManager.set("runIndex", function () {

	var bounds = RD.boundManager.getBounds(),
		$footerLinksContainer = jQ(".footer");

	RD.controls.footerLinks({
		originalElement:$footerLinksContainer,
		visibleFor:[
			bounds.phone,
			bounds.tablet
		],
		onCreationStart:function ($control) {
			if ($control.length) {
				RD.logger.log("start control creation")
			}
		},
		onCreationComplete:function ($control) {
			if ($control.length) {
				RD.logger.log("control was created")
			}
		}
	});
});