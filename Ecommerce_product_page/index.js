const hamburgerElement = document.querySelector(".hamburger-group-icon");
const menu = document.querySelector(".mobile_menu");
const closeElement = document.querySelector(".close_icon");

const openMenu = () => {
	menu.classList.add("show_menu");
};

const closeMenu = () => {
	menu.classList.remove("show_menu");
};

hamburgerElement.addEventListener("click", openMenu);
closeElement.addEventListener("click", closeMenu);
menu.addEventListener("click", closeMenu);
