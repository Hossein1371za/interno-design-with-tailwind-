const navTriggerBtn = document.querySelector("#nav-tigger-btn");
const navMenu = document.querySelector("#nav-menu");

navTriggerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("nav-open");
});

// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
        slidesPerView: 22,
      },
      1200: {
        slidesPerView: 3,
      },
  },
});
