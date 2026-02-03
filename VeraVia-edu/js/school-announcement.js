document.addEventListener("DOMContentLoaded", function () {
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
        slidesPerView: 1,
        spaceBetween: 16,
      },
      576: {
        slidesPerView: 1.6,
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
        slidesPerView: 1,
        spaceBetween: 16,
      },

      576: {
        slidesPerView: 2,
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

window.addEventListener("pagehide", () => {
  if (announcementSwiper) {
    announcementSwiper.destroy(true, true);
  }
  if (jobOpeningsSwiper) {
    jobOpeningsSwiper.destroy(true, true);
  }
});

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    console.log("Страница восстановлена из кэша");
  }
});
