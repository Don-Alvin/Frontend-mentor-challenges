// Sliding Menu
const hamburgerElement = document.querySelector(".hamburger-group-icon");
const menu = document.querySelector(".mobile_menu");
const closeElement = document.querySelector(".close_icon");

// Images
const mainImage = document.querySelector(".main-image");
const otherImages = document.querySelectorAll(".other-image");

// Product details
const productName = document.querySelector(".product_name");
const productCount = document.getElementById("count");
const sellingPrice = document.querySelector(".price_discount");

// Cart
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const cartCount = document.getElementById("cart_count");
const addToCartBtn = document.querySelector(".add-to-cart");
const cartIcon = document.querySelector(".cart_group");
const cart = document.querySelector(".cart_container");
const cartContent = document.querySelector(".cart_contents");
const cartImage = document.querySelector(".cart_content-image");
const cartTitle = document.querySelector(".detail_title");
const cartPrice = document.querySelector(".single_price");
const cartQuantity = document.querySelector(".detail_quantity");
const cartTotalPrice = document.querySelector(".total_price");
const cartDelete = document.querySelector(".delete");
const emptyCartElement = document.querySelector(".empty_cart");

// Functions and Logic

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

// CART LOGIC

// Increase and decrease quantity
let count = 1;
const reduceQuantity = () => {
	count--;
	if ((count = 1)) {
		productCount.innerText = 1;
	} else {
		productCount.innerText = count;
	}
};

const addQuantity = () => {
	count++;
	productCount.innerText = count;
};

// Add to cart
let items = 1;
const addToCart = () => {
	cartCount.innerText = items;
	//Cart Container

	emptyCartElement.classList.add("hide_empty_cart");
	cartContent.classList.add("show_contents");
	cartImage.src = mainImage.src;
	cartTitle.innerText = productName.innerText;
	cartPrice.innerText = sellingPrice.innerText;
	cartQuantity.innerText = productCount.innerText;
	// Total price
	let price = sellingPrice.innerText.substr(1, 3);
	let totalPrice = +price * count;
	cartTotalPrice.innerText = "$" + totalPrice + ".00";
};

let price = sellingPrice.innerText.substr(1, 3);
let totalPrice = +price * count;
console.log(price);
console.log(totalPrice);

// Show cart
const showCart = () => {
	cart.classList.toggle("show_cart");
};

// Remove Contents
const removeContents = () => {
	cartContent.classList.remove("show_contents");
	emptyCartElement.classList.remove("hide_empty_cart");
	cartCount.innerText = 0;
};

// Event Listeners
hamburgerElement.addEventListener("click", openMenu);
closeElement.addEventListener("click", closeMenu);
menu.addEventListener("click", closeMenu);
decreaseBtn.addEventListener("click", reduceQuantity);
increaseBtn.addEventListener("click", addQuantity);
addToCartBtn.addEventListener("click", addToCart);
cartIcon.addEventListener("click", showCart);
cartDelete.addEventListener("click", removeContents);
