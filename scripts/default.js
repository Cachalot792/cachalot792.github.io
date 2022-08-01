$(document).ready(function() {
    $('.nav-bar').on('click', function() {
      $('.space').toggleClass('hidden-space');
      $('nav').toggleClass('hidden-nav');
      $('.nav-bar').toggleClass('nav-bar-white');
    });
});

if (window.matchMedia('(max-width: 600px)').matches) {
  $('.space').addClass('hidden-space');
  $('nav').addClass('hidden-nav');
  $('.nav-bar').addClass('nav-bar-white');
  $('header').addClass('header-onclick');
};

$(window).bind("load", function(){
  if(location.href == "https://cachalot792.github.io/") {
    $('nav li:nth-of-type(1) a').addClass('nav-highlight');
  }
});