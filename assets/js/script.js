var prev = 0;
var $window = $(window);

$window.on('scroll', function(){
  var scrollTop = $window.scrollTop();
  $('nav').toggleClass('nav-unhidden', scrollTop <= prev);
  $('nav').toggleClass('nav-hidden', scrollTop > prev);
  prev = scrollTop;
});