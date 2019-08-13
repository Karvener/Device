
/****** Sliders *******/
var dot1 = document.querySelector('.slider-dots .slider-dot-1');
var dot2 = document.querySelector('.slider-dots .slider-dot-2');
var dot3 = document.querySelector('.slider-dots .slider-dot-3');
var dots = document.querySelectorAll('.slider-dots, .slider-dot');

var slider1 = document.querySelector('.wrapper-slider .slider-1');
var slider2 = document.querySelector('.wrapper-slider .slider-2');
var slider3 = document.querySelector('.wrapper-slider .slider-3');
var sliders = document.querySelectorAll('.wrapper-slider .slider');


dot1.addEventListener("click", function() {
  dot2.classList.remove('active-dot');
  dot3.classList.remove('active-dot');
  slider2.classList.remove('active-slider');
  slider3.classList.remove('active-slider');
  dot1.classList.add('active-dot');
  slider1.classList.add('active-slider');
});

dot2.addEventListener("click", function() {
  dot1.classList.remove('active-dot');
  dot3.classList.remove('active-dot');
  slider1.classList.remove('active-slider');
  slider3.classList.remove('active-slider');
  dot2.classList.add('active-dot');
  slider2.classList.add('active-slider');
});

dot3.addEventListener("click", function() {
  dot1.classList.remove('active-dot');
  dot2.classList.remove('active-dot');
  slider1.classList.remove('active-slider');
  slider2.classList.remove('active-slider');
  dot3.classList.add('active-dot');
  slider3.classList.add('active-slider');
});


/*********** Services-tabulator ********/
var nav1 = document.querySelector('.services-lists .services-list-1');
var nav2 = document.querySelector('.services-lists .services-list-2');
var nav3 = document.querySelector('.services-lists .services-list-3');

var slideService1 = document.querySelector('.services-slider-delivery');
var slideService2 = document.querySelector('.services-slider-warranty');
var slideService3 = document.querySelector('.services-slider-credit');

nav1.addEventListener('click', function() {
  nav2.classList.remove('active-nav');
  nav3.classList.remove('active-nav');
  slideService2.classList.remove('active-service');
  slideService3.classList.remove('active-service');
  nav1.classList.add('active-nav');
  slideService1.classList.add('active-service');
});

nav2.addEventListener('click', function() {
  nav1.classList.remove('active-nav');
  nav3.classList.remove('active-nav');
  slideService1.classList.remove('active-service');
  slideService3.classList.remove('active-service');
  nav2.classList.add('active-nav');
  slideService2.classList.add('active-service');
});

nav3.addEventListener('click', function() {
  nav2.classList.remove('active-nav');
  nav1.classList.remove('active-nav');
  slideService2.classList.remove('active-service');
  slideService1.classList.remove('active-service');
  nav3.classList.add('active-nav');
  slideService3.classList.add('active-service');
});


/*********** Map ********/

var linkMap = document.querySelector(".map-mini");
var popupMap = document.querySelector(".modal-map");
var closeMap = document.querySelector(".modal-map-close");
var overlay = document.querySelector(".overlay");


linkMap.addEventListener("click", function() {
  popupMap.classList.add("map-show");
  overlay.classList.add("overlay-show");
});

closeMap.addEventListener("click", function() {
  popupMap.classList.remove("map-show");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener('click', function() {
  popupMap.classList.remove("map-show");
  overlay.classList.remove("overlay-show");
});


/************* Write Us ***********/

var linkModal = document.querySelector('.info-contacts .contacts-btn');
var popupModal = document.querySelector('.modal');
var overlay = document.querySelector(".overlay");
var closeModal = document.querySelector(".modal-close");

linkModal.addEventListener('click', function() {
  popupModal.classList.add('modal-show');
  overlay.classList.add('overlay-show');
});

closeModal.addEventListener('click', function() {
  popupModal.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
});

overlay.addEventListener('click', function() {
  popupModal.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
});


