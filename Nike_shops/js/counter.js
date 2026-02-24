export const counter = () => {
  const MinButton = document.querySelector(".counter__button--min");
  const MaxButton = document.querySelector(".counter__button--max");
  const valueEl = document.querySelector(".counter__value");

  if (!MinButton || !MaxButton || !valueEl) return;

  let count = 1;

  MaxButton.addEventListener("click", () => {
    if (count < 8) {
      count++;
      valueEl.textContent = count;
    }
  });
  MinButton.addEventListener("click", () => {
    if (count > 1) {
      count--;
      valueEl.textContent = count;
    }
  });
};
