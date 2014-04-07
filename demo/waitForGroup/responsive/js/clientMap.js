responsify.clientMap = {
	bounds: {
		phone: { maxWidth: 669 },
		tablet: { minWidth: 670, maxWidth: 1280 },
		desktop: { minWidth: 1281 }
	},
	controls: [
		"slider"
	],
	sources: {
		timeout: 10000,
		js: [
			{ src: "index.js", callback: "runIndex" }
		],
		css: [
			{ id: "rd-test", href: "../css/index.css" }
		]
	}
};
