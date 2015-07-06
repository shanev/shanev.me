/* ---------------------------------------------- /*
 * Navbar
/* ---------------------------------------------- */

var navbar = $('.navbar');
var navHeight = navbar.height();

// $(window).scroll(function() {
//   if($(this).scrollTop() >= navHeight) {
//     navbar.addClass('navbar-color');
//   }
//   else {
//     navbar.removeClass('navbar-color');
//   }
// });

if($(window).width() <= 767) {
  navbar.addClass('custom-collapse');
}

$(window).resize(function() {
  if($(this).width() <= 767) {
    navbar.addClass('custom-collapse');
  }
  else {
    navbar.removeClass('custom-collapse');
  }
});
