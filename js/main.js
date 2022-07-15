$('.mobile-nav-toggle').on('click', function(){
document.querySelector("#navbar").classList.toggle('navbar-mobile')
this.classList.toggle('fa-bars')
this.classList.toggle('fa-close')

});
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

 var selectHeader = document.querySelector("#header");
 var selectTopbar = document.querySelector("#topbar");
 if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add('header-scrolled');
      if (selectTopbar) {
        selectTopbar.classList.add('topbar-scrolled');
      }
    } else {
      selectHeader.classList.remove('header-scrolled');
      if (selectTopbar) {
        selectTopbar.classList.remove('topbar-scrolled');
      }
    }
  }
  window.addEventListener('load', headerScrolled);
  onscroll(document, headerScrolled);
}


window.addEventListener('load',()=>{
  AOS.init({
    duration:1000,
    easing:"ease-in-out",
    once:true,
    mirror:false,

  });

});

})();

window.addEventListener('load', () => {
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash)
    }
  }
});

const scrollto = (el) => {
  let header = select('#header')
  let offset = header.offsetHeight

  let elementPos = select(el).offsetTop
  window.scrollTo({
    top: elementPos - offset,
    behavior: 'smooth',
  });
} 
$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    autoplay:true,
    goToFirst : true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    loop: true,
    nav: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
  });
});

