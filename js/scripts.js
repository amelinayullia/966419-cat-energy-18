var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var mapWrapper = document.querySelector(".contacts__map-wrapper");

navMain.classList.remove("main-nav--nojs");
mapWrapper.classList.remove("contacts__map-wrapper--nojs");

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
