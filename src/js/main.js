import { getLocalStorage } from "./utils.mjs";

// Display the number of items on the cart icon
export function updateCartCount() {
  const cartItems = getLocalStorage("so-cart") || [];
  let cartCountEl = document.querySelector(".cart-count");

  // If the element does not exist yet, create it
  if (!cartCountEl) {
    const cartLink = document.querySelector(".cart a");
    cartCountEl = document.createElement("span");
    cartCountEl.classList.add("cart-count");
    cartLink.appendChild(cartCountEl);
  }

  cartCountEl.textContent = cartItems.length;
}

// Initial call to display the count
updateCartCount();
