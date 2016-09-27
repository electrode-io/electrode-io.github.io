var stickAtHeight = 200;
var toggleModules = 2050;
var toggleTools = 3100;

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > stickAtHeight) {
    $('#second-nav').addClass('navbar-fixed-top');
  } else {
    $('#electrode-tools-logo-li').removeClass('inactive-inner-link active-inner-link');
    $('#electrode-modules-logo-li').removeClass('active-inner-link').addClass('inactive-inner-link');
    $('#electrode-core-logo-li').removeClass('inactive-inner-link').addClass('active-inner-link')
    $('#second-nav').removeClass('navbar-fixed-top');
  }
});


$(window).bind('scroll', function () {
  if ($(window).scrollTop() > toggleModules) {
    $('#electrode-core-logo-li').removeClass('active-inner-link').addClass('inactive-inner-link');
    $('#electrode-modules-logo-li').removeClass('inactive-inner-link').addClass('active-inner-link');
  } else {
    $('#electrode-modules-logo-li').removeClass('active-inner-link').addClass('inactive-inner-link');
    $('#electrode-core-logo-li').removeClass('inactive-inner-link').addClass('active-inner-link');
  }
});

$(window).bind('scroll', function () {
  if ($(window).scrollTop() > toggleTools) {
    $('#electrode-modules-logo-li').removeClass('active-inner-link').addClass('inactive-inner-link');
    $('#electrode-tools-logo-li').removeClass('inactive-inner-link').addClass('active-inner-link');
  } else {
    $('#electrode-tools-logo-li').removeClass('active-inner-link').addClass('inactive-inner-link');
    $('#electrode-modules-logo-li').addClass('active-inner-link');
  }
});