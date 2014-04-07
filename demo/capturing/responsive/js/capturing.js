RD.clientFnManager.set("runCapturing", function () {

	var imgs = document.querySelectorAll("img[old-src]");
	for (var i = 0; i < imgs.length; i++) {
		var img = imgs[i];
		var ogImage = img.getAttribute("old-src");
		img.setAttribute("src", ogImage);
	}
});