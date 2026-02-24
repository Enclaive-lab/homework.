export function productSlider() {
  const sliderEl = document.querySelector(".product__slider");
  if (!sliderEl) return;

  new Swiper(sliderEl, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
     prevEl: '.product__slider-button--prev' ,
     nextEl: '.product__slider-button--next',
    },
  });
}
