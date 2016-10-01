// State
var pillarsArr = ["core", "modules", "tools"];
var pillarsObject = {"core": "2%", "modules": "36%", "tools": "69%"};
var pillarsState = {"core": true, "modules": false, "tools": false};

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

// handle click of moble toggle
function togglePillars(pillarSelection) {
  console.log("TOGGLE-TOGGLE");
  $(".slickCarousel").slick("slickGoTo", pillarsArr.indexOf(pillarSelection));
};

//handle change/update of carousel
function updateToggleMenu(currentSlide){
  console.log("UPDATE-TOGGLE");
  pillarsArr.forEach(function(p, index){
    if (currentSlide === index && pillarsState[p] === false){
      pillarsState[p] = true;
      document.getElementById("mobile-" + p + "-pillar").setAttribute("src", "/img/" + p + "-full@3x.png");
      document.getElementById("mobile-" + p + "-footer").style.color = "#ff0076";
      document.getElementById("slider-toggle").style.marginLeft = pillarsObject[p];
      document.getElementById("mobile-" + p + "-footer").setAttribute("class", "elc-icon-icn-" + p + " footer-toggle-items footer-arrow-up");
    }else if (currentSlide != index && pillarsState[p] === true) {
      pillarsState[p] = false;
      document.getElementById("mobile-" + p + "-pillar").setAttribute("src", "/img/" + p + "-full-2@3x.png");
      document.getElementById("mobile-" + p + "-footer").style.color = "#333";
      document.getElementById("mobile-" + p + "-footer").setAttribute("class", "elc-icon-icn-" + p + " footer-toggle-items");
    }else {
      console.log("Skipped: ", p);
    }
  });
}

// listen for changes
$(".slickCarousel").on('afterChange', function (event, slick, currentSlide, nextSlide) {
    updateToggleMenu(currentSlide);
});
