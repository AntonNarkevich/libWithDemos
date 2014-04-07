RD.clientFnManager.set("runIndex", function () {

	var bounds = RD.boundManager.getBounds();

	RD.eventManager.on("ajaxRequest", function (obj) {
		if(obj.request.readyState == RD.ajaxWrapper.readyStates.complete) {
			alert("Ajax Completed")
		}
	});


	RD.ajaxWrapper.registerCallBack(/index/, function () {
		alert("Congratulations!");
	}, function () {
		alert("Failure!")
	});


	var callbacksGroup = [];

	for(var i = 0; i < 5; i++) {
		callbacksGroup.push(RD.ajaxWrapper.registerCallBack(new RegExp("index" + i), function () {
			alert("Congratulations: request " + i + " completed");
		}));
	}

	var callbacksGroup = [
		,
		RD.ajaxWrapper.registerCallBack(/index/, function () {
			alert("Congratulations!");
		}),
		RD.ajaxWrapper.registerCallBack(/index/, function () {
			alert("Congratulations!");
		}),
		RD.ajaxWrapper.registerCallBack(/index/, function () {
			alert("Congratulations!");
		}),
		RD.ajaxWrapper.registerCallBack(/index/, function () {
			alert("Congratulations!");
		}),
		RD.ajaxWrapper.registerCallBack(/index/, function () {
			alert("Congratulations!");
		})
	]


	RD.ajaxWrapper.startListening();

	jQ(".send-request").on("click", function () {
		jQ.get("original/css/index.css");
	});

	jQ(".send-wrong-request").on("click", function () {
		jQ.get("original/css/index.jss");
	});
});