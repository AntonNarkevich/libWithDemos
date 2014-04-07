RD.clientFnManager.set("runIndex", function () {

	var bounds = RD.boundManager.getBounds(),
		$dropDownContainer = jQ(".color");

	RD.controls.dropDown({
		originalElement:$dropDownContainer,
		visibleFor:[
			bounds.phone,
			bounds.tablet
		],
		onCreationStart:function ($control) {
			if ($control.length) {
				console.log("start control creation")
			}
		},
		onCreationComplete:function ($control) {
			if ($control.length) {
				console.log("control was created")
			}
		}
	});
});