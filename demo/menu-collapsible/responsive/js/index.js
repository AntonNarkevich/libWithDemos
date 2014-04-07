RD.clientFnManager.set("runIndex", function () {

	var bounds = RD.boundManager.getBounds(),
		$menuContainer = jQ(".sf-menu");

	RD.controls.menuCollapsible({
		originalElement:$menuContainer,
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