RD.clientFnManager.set("runIndex", function () {

	var bounds = RD.boundManager.getBounds(),
		popup,
		visibleFor = [bounds.phone, bounds.tablet],
		$popupContentSource = jQ(".popup-content"),
		$openPopupTrigger = jQ(".openPopup");

	RD.boundManager.applyFor($openPopupTrigger, visibleFor);

	popup = RD.controls.simplePopup({
		originalElement: $popupContentSource,
		visibleFor: visibleFor,
		iScrollSettings: {
			checkDOMChanges: true
		},
		isStaticHeight: false,

		onOpen: function ($control, scroll) {
			RD.logger.log("popup opened")
		},
		onClose: function ($control, scroll) {
			RD.logger.log("popup closed")
		},
		onRefresh: function ($control, scroll) {
			RD.logger.log("popup refreshed")
		},
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

	$openPopupTrigger.click(function () {
		popup.open();
	});
});