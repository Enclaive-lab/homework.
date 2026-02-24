export const smoothScroll = () => {
  const menuLinks = document.querySelectorAll("menu__link");

  if (!menuLinks) return;

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (!targetId) return;

      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};
