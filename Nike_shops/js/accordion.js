export const accordionList = () => {
  const accordionBtn = document.querySelectorAll(".accordion-list__button");

  if (!accordionBtn.length) return;

  accordionBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".accordion-list__item");
      item.classList.toggle("accordion-list__item--open");
    });
  });
};
