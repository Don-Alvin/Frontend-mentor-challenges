// Sliding Menu
const hamburgerElement = document.querySelector(".hamburger-group-icon");
const menu = document.querySelector(".mobile_menu");
const closeElement = document.querySelector(".close_icon");

// Images
const mainImage = document.querySelector(".main-image");
const otherImages = document.querySelectorAll(".other-image");

// Cart

const openMenu = () => {
	menu.classList.add("show_menu");
};

const closeMenu = () => {
	menu.classList.remove("show_menu");
};

let otherImage;
for (let i = 0; i < otherImages.length; i++) {
	otherImage = otherImages[i];
	const replaceImage = () => {
		mainImage.src = otherImages[i].src;
	};
	otherImage.addEventListener("click", replaceImage);
}

hamburgerElement.addEventListener("click", openMenu);
closeElement.addEventListener("click", closeMenu);
menu.addEventListener("click", closeMenu);
