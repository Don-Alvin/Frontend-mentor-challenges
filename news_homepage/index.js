const openMenuElement = document.querySelector(".menu_icon");
const closeMenuElement = document.querySelector(".close_icon");
const slidingMenu = document.querySelector(".sliding_menu");

const openMenu = () => {
	slidingMenu.classList.add("show_sliding_menu");
};

const closeMenu = () => {
	slidingMenu.classList.remove("show_sliding_menu");
};

openMenuElement.addEventListener("click", openMenu);
closeMenuElement.addEventListener("click", closeMenu);
slidingMenu.addEventListener("click", closeMenu);
