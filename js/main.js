// add nav background colors after 30px
window.addEventListener("scroll", () => {
	console.log("ggg");
	const navi = document.getElementById("navbar-main");
	if (window.pageYOffset >= 30 && !navi.classList.contains("addBackground")) {
		navi.classList.add("addBackground");
	} else if (
		window.pageYOffset < 30 &&
		navi.classList.contains("addBackground")
	) {
		navi.style.transition = ".3s";
		navi.classList.remove("addBackground");
	}
});
