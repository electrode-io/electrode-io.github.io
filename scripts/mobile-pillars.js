// toggle function to toggle currently selected pillar in mobile view

// Init Slick carousel
$(document).ready(function(){
  $('.slickCarousel').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: false,
    prevArrow: false,
    nextArrow: false
  });
  togglePillars("core");
});


var pillarsArr = ["core", "modules", "tools"];
var pillarsObject = {"core": "0px", "modules": "33%", "tools": "66%"};

function togglePillars(pillarSelection) {

  pillarsArr.forEach(function(p){
    if (pillarSelection === p){
      document.getElementById("slider-toggle").style.marginLeft = pillarsObject[p];
      document.getElementById("mobile-"+ p).setAttribute("class", "mobile-header-items selected");
      $('.slickCarousel').slick('slickGoTo', pillarsArr.indexOf(p));
      document.getElementById("mobile-" + p + "-footer").style.color = "#ff0076";
      document.getElementById("mobile-" + p + "-footer").setAttribute("class", "elc-icon-icn-" + p + " footer-toggle-items footer-arrow-up");
      document.getElementById("mobile-" + p + "-pillar").setAttribute("src", "/img/" + p + "-full@3x.png");
    }else{
      document.getElementById("mobile-"+ p).setAttribute("class", "mobile-header-items");
      document.getElementById("mobile-" + p + "-footer").style.color = "#333";
      document.getElementById("mobile-" + p + "-footer").setAttribute("class", "elc-icon-icn-" + p + " footer-toggle-items");
      document.getElementById("mobile-" + p + "-pillar").setAttribute("src", "/img/" + p + "-full-2@3x.png");
    }
  });
};

function updateToggleMenu(currentSlide){
  pillarsArr.forEach(function(p, index){
    if (currentSlide === index){
      document.getElementById("mobile-"+ p).setAttribute("class", "mobile-header-items selected");
      document.getElementById("mobile-" + p + "-footer").style.color = "#ff0076";
      document.getElementById("mobile-" + p + "-footer").setAttribute("class", "elc-icon-icn-" + p + " footer-toggle-items footer-arrow-up");
      document.getElementById("mobile-" + p + "-pillar").setAttribute("src", "/img/" + p + "-full@3x.png");
    }else{
      document.getElementById("mobile-"+ p).setAttribute("class", "mobile-header-items");
      document.getElementById("mobile-" + p + "-footer").style.color = "#333";
      document.getElementById("mobile-" + p + "-footer").setAttribute("class", "elc-icon-icn-" + p + " footer-toggle-items");
      document.getElementById("mobile-" + p + "-pillar").setAttribute("src", "/img/" + p + "-full-2@3x.png");
    }
  });
}

$('.slickCarousel').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    updateToggleMenu(currentSlide);
});
