const openMenuElement = document.querySelector(".menu_icon");
const closeMenuElement = document.querySelector(".close_icon");
const slidingMenu = document.querySelector(".sliding_menu");
const scrollUpIcon = document.querySelector(".scroll_up-icon");

const openMenu = () => {
	slidingMenu.classList.toggle("show_sliding_menu");
};

const closeMenu = () => {
	slidingMenu.classList.remove("show_sliding_menu");
};

const showScrollIcon = () => {
	if (scrollY >= 350) {
		scrollUpIcon.classList.add("show_scroll_icon");
	} else {
		scrollUpIcon.classList.remove("show_scroll_icon");
	}
};

// const scrollUp = () => {
// 	this.scrollY = 0;
// };

openMenuElement.addEventListener("click", openMenu);
closeMenuElement.addEventListener("click", closeMenu);
slidingMenu.addEventListener("click", closeMenu);
window.addEventListener("scroll", showScrollIcon);
// scrollUpIcon.addEventListener("click", scrollUp);
