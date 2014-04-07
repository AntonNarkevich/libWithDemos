responsify.clientMap = {
	viewport: "",
	bounds: {
		phone: { maxWidth: 669 },
		tablet: { minWidth: 670, maxWidth: 1280 },
		desktop: { minWidth: 1281 }
	},
	controls: [
		"menuBlock"
	],
	sources: {
		timeout: 10000,
		js: [
			{ src: "index.js", callback: "runIndex"}
		],
		css: [

		]
	}
};