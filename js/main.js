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

const sr = ScrollReveal({
  origin:"bottom",
  distance: "60px",
  duration:3000,
  delay:600,
  reset:"true",
})

sr.reveal('.hero__text',{origin:"top"})


sr.reveal('.steps__step',{distance:"100px",interval:100})


sr.reveal('.about__text',{origin:"right"})
sr.reveal('.about__img',{origin:"left",delay:800})


sr.reveal('.testimonial__bg',{delay:800})
sr.reveal('.testimonial__title')
sr.reveal('.testimonial__slider',{delay:1000})


sr.reveal('.brands__image',{delay:600,distance:"100px",interval:100})

sr.reveal('.work__title')
sr.reveal('.work__subtitle',{delay:800})
sr.reveal('.work__grid',{delay:1000})


sr.reveal('.stats')
sr.reveal('.stats__item',{
  distance:"100px",
  interval:100,
})




 