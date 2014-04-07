RD.clientFnManager.set("runIndex", function () {

	var bounds = RD.boundManager.getBounds();

	(function zoomImage(){
		RD.controls.pinchZoom({
			originalElement: "img.test-img",
			visibleFor: [
				bounds.phone,
				bounds.tablet
			],
			onCreationStart: function ($control) {
				if($control.length) {
					RD.logger.log("start control creation")
				}
			},
			onCreationComplete: function ($control) {
				if($control.length) {
					RD.logger.log("control was created")
				}
			}
		});
	})();

	(function zoomImageInPopup(){
		var $triggerImgTest = jQ("img.test-img-popup");

		var zoomImgTest = RD.controls.pinchZoom({
			originalElement: $triggerImgTest,
			manageVisibility: function ($controlContainer) {
				RD.boundManager.applyFor($controlContainer, [bounds.phone, bounds.tablet]);
			},
			onCreationStart: function ($control) {
				if($control.length) {
					RD.logger.log("start control creation")
				}
			},
			onCreationComplete: function ($control, zoom) {
				if($control.length) {
					RD.logger.log("control was created")
				}
			}
		});

		var popupImgTest = RD.controls.simplePopup({
			originalElement: zoomImgTest.$el,
			visibleFor: [bounds.phone, bounds.tablet],
			iScrollSettings: {
				checkDOMChanges: true,
				handleClick: false
			},
			isStaticHeight: false,
			isCloningNeeded: false,
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
				if($control.length) {
					RD.logger.log("start control creation")
				}
			},
			onCreationComplete: function ($control) {
				if($control.length) {
					RD.logger.log("control was created")
				}
			}
		});

		$triggerImgTest.click(function () {
			popupImgTest.open();
		});
	})();

	(function zoomContentInPopup(){
		var $trigger = jQ(".zoom-container");

		var zoomImgTest = RD.controls.pinchZoom({
			originalElement: $trigger,
			manageVisibility: function ($controlContainer) {
				RD.boundManager.applyFor($controlContainer, [bounds.phone, bounds.tablet]);
			},
			onCreationStart: function ($control) {
				if($control.length) {
					RD.logger.log("start control creation")
				}
			},
			onCreationComplete: function ($control, zoom) {
				if($control.length) {
					RD.logger.log("control was created")
				}
			}
		});

		var popupImgTest = RD.controls.simplePopup({
			originalElement: zoomImgTest.$el,
			visibleFor: [bounds.phone, bounds.tablet],
			iScrollSettings: {
				checkDOMChanges: true,
				handleClick: false
			},
			isStaticHeight: false,
			isCloningNeeded: false,
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
				if($control.length) {
					RD.logger.log("start control creation")
				}
			},
			onCreationComplete: function ($control) {
				if($control.length) {
					RD.logger.log("control was created")
				}
			}
		});

		$trigger.click(function () {
			popupImgTest.open();
		});
	})();
});