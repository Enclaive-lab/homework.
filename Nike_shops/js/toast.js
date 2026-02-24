export const toast = () => {
  const toastEl = document.querySelector(".toast-added");
  const buyButton = document.querySelector("[data-modal-button='buy']");

  if (!toastEl || !buyButton) return;

  buyButton.addEventListener("click", () => {
    toastEl.classList.add("toast--visible");

    setTimeout(() => {
      toastEl.classList.remove("toast--visible");
    }, 4000);
  });
};
