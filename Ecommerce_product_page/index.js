// Sliding Menu
const hamburgerElement = document.querySelector(".hamburger-group-icon");
const menu = document.querySelector(".mobile_menu");
const closeElement = document.querySelector(".close_icon");

// Images
const mainImage = document.querySelector(".main-image");
const otherImages = document.querySelectorAll(".other-image");

// Cart
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const productCount = document.getElementById("count");
const cartCount = document.getElementById("cart_count");
const addToCartBtn = document.querySelector(".add-to-cart");
const cartIcon = document.querySelector(".cart");
const cart = document.querySelector(".cart_container");

// Function and Logic

// Mobile Menu
const openMenu = () => {
	menu.classList.add("show_menu");
};

const closeMenu = () => {
	menu.classList.remove("show_menu");
};

// Changing Images
let otherImage;
for (let i = 0; i < otherImages.length; i++) {
	otherImage = otherImages[i];
	const replaceImage = () => {
		mainImage.src = otherImages[i].src;
	};
	otherImage.addEventListener("click", replaceImage);
}

// Increase and decrease quantity and Cart
let count = 0;
const reduceQuantity = () => {
	count--;
	if (count <= 0) {
		productCount.innerText = 0;
	} else {
		productCount.innerText = count;
	}
};

const addQuantity = () => {
	count++;
	productCount.innerText = count;
};

// Add to cart
let items = 0;
const addToCart = () => {
	items++;
	cartCount.innerText = items;
};

// Show cart
const showCart = () => {
	cart.classList.toggle("show_cart");
};

// Event Listeners
hamburgerElement.addEventListener("click", openMenu);
closeElement.addEventListener("click", closeMenu);
menu.addEventListener("click", closeMenu);
decreaseBtn.addEventListener("click", reduceQuantity);
increaseBtn.addEventListener("click", addQuantity);
addToCartBtn.addEventListener("click", addToCart);
cartIcon.addEventListener("click", showCart);
