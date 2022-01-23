/* eslint-disable no-useless-concat */
// eslint-disable-next-line no-undef
new Swiper('.header__slider', {
  slidesPerView: 1,
  effect: 'fade',
  navigation: {
    nextEl: '.header__slider-button--next',
    prevEl: '.header__slider-button--prev',
  },
  pagination: {
    el: '.header__slider-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return (
        `<span class="${currentClass}"></span>` + '&ensp;&mdash;&ensp;' + `<span class="${totalClass}"></span>`
      );
    },
    fadeEffect: {
      crossFade: true,
    },
  },
});
