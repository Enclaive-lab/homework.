document.addEventListener("DOMContentLoaded", function () {
  // Первый слайдер
  const announcementSwiper = new Swiper(".school-announcement__slider", {
    loop: true,
    slidesPerView: 3.3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".school-announcement__button-next",
      prevEl: ".school-announcement__button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3.9,
        spaceBetween: 20,
      },
    },
  });

  // Второй слайдер
  const jobOpeningsSwiper = new Swiper(".job-openings__slider", {
    loop: true,
    slidesPerView: 3.3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".job-openings__button-next",
      prevEl: ".job-openings__button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2.3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3.9,
        spaceBetween: 20,
      },
    },
  });
});
