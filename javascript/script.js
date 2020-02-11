const responsive = {
  0: {
    items: 1
  },
  320: {
    items: 1
  },
  560: {
    items: 2
  },
  960: {
    items: 3
  }
}

$(document).ready(function() {
  $nav = $(".nav");
  $toggle = $(".toggle");

  $toggle.click(function() {
    $nav.toggleClass("collapse");
  });


  // owl-carousel for blog
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [$(".owl-nav .owl-nav-prev"), $(".owl-nav .owl-nav-next")],

    // to make it responsive
    responsive: responsive
  });


  // click to scroll up
  $('.moveUp span').click(function(){
    $('html, body').animate({
      scrollTop: 0},
      1000);
 
  })
});
