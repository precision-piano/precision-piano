(function () {
	var header = document.getElementById("mainHeader");

	function changeHeader() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		header.classList.toggle("header-background", scrollTop >= 50 || document.body.classList.contains("nav-open"));
	}

	var didScroll = false;

	window.addEventListener("scroll", function () {
		didScroll = true;
	});

	setInterval(function() {
		if (didScroll) {
			didScroll = false;
			changeHeader();
		}
	}, 100);

	changeHeader();

	document.getElementById("open-nav").addEventListener("click", function (event) {
		event.preventDefault();
		document.body.classList.toggle("nav-open");
		changeHeader();
	});

	document.querySelectorAll('a[href*="#"]').forEach(function (link) {
		link.addEventListener("click", function (event) {
			if (link.pathname === window.location.pathname) {
				var target = document.querySelector(link.hash);
				if (target) {
					event.preventDefault();
					target.scrollIntoView({ behavior: "smooth" });
				}
			}
		});
	});
})();
