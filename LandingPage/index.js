const headerBg = () => {
	scrollY > 80
		? header.classList.add("header_scroll")
		: header.classList.remove("header_scroll");
};

window.addEventListener("scroll", headerBg);
const header = document.querySelector(".header");
