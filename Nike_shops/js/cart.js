export const cart = () => {
  const buyButton = document.querySelector(".product__buy-button");
  const cartCount = document.querySelector(".cart-count");

  if (!buyButton || !cartCount) return;

  let count = parseInt(localStorage.getItem("cartCount")) || 0;
  cartCount.textContent = count;

  buyButton.addEventListener("click", () => {
    count++;
    cartCount.textContent = count;
    localStorage.setItem("cartCount", count);
  });
};
