// add nav background colors after 30px
window.addEventListener("scroll", () => {
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

// mouse over parallax effcet
let navbar = document.getElementById("navbar-main");
let hero = document.getElementById("hero");
// navbar.addEventListener("mousemove", parallax);
window.addEventListener("mousemove", parallax);

function parallax(e) {
	hero.querySelectorAll(".layer").forEach((layer) => {
		const speed = layer.getAttribute("data-speed");
		const rotate = layer.getAttribute("data-rotate");

		const x = (window.innerWidth - e.pageX * speed) / 100;
		const y = (window.innerHeight - e.pageY * speed) / 100;

		layer.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotate}deg)`;
	});
}

// box map
mapboxgl.accessToken =
	"pk.eyJ1IjoiY2xiY2hhbmEiLCJhIjoiY2txd2k4MGx5MG01bzJvcGNmNXc5NTRmMiJ9.XuVFin9HB7UZUofJHjEBdw";
var map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/streets-v11",
});
// box map end

var myModal = new bootstrap.Modal(document.getElementById("exampleModal"), {});
myModal.toggle();
