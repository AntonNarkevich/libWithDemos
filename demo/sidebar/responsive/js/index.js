RD.clientFnManager.set("runIndex", function () {

	var bounds = RD.boundManager.getBounds(),
		$menuContainer = jQ(".sf-menu");

	var menublock = RD.controls.menuBlock({
		originalElement:$menuContainer,
		visibleFor:[
			bounds.phone,
			bounds.tablet
		],
		animationDuration:600,

		menuItemIconClass:"icon-plus",
		expendedMenuItemIconClass:"icon-minus",
		lastLevelItemIconClass:"icon-chevron-right",

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


	$toggleSidebarTrigger = jQ('<input type="button" class="togglePopup" value="toggle sidebar"/>')
		.insertAfter(menublock.$el);

	var sidebar = RD.controls.sidebar({
		originalElement:menublock.$el,
		visibleFor:[
			bounds.phone,
			bounds.tablet
		],

		isCloningNeeded:false,

		onOpen:function ($control, scroll) {
			RD.logger.log("sidebar opened")
		},
		onClose:function ($control, scroll) {
			RD.logger.log("sidebar closed")
		},

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

	$toggleSidebarTrigger.click(function () {
		sidebar.toggle();
	});

	RD.boundManager.applyForOther($toggleSidebarTrigger, bounds.desktop);
});