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

	for(var i = 0; i < 6; i++) {
		(function(index){
			callbacksGroup.push(RD.ajaxWrapper.registerCallBack(new RegExp("data" + index), function () {
				alert("Congratulations: request " + index + " completed");
			}));
		})(i)
	}

	RD.ajaxWrapper.waitForGroup(callbacksGroup, function () {
		alert("Congratulations! All requests were completed.");
	});

	RD.ajaxWrapper.startListening();

	jQ(".send-request").on("click", function () {
		jQ.get("original/css/index.css");
	});

	jQ(".send-wrong-request").on("click", function () {
		jQ.get("original/css/index.jss");
	});

	jQ(".ajax-group").on("click", "input", function () {
		var index = jQ(this).data("index");
		jQ.get("original/data/data" + index + ".js");
	});
});