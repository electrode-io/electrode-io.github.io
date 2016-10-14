// State
var pillarsArr = ["core", "modules", "tools"];
var pillarsObject = {"core": "2.2%", "modules": "36%", "tools": "69%"};
var pillarsState = {"core": false, "modules": false, "tools": false};

// save refs to elements repeatedly used
var outerMostSlickElement;
var mobileToolsConent;

// make array of img dom elements
// rather than make get calls for toggeling imgs, replace dom element.
var bluePillarImgArray = new Array();

bluePillarImgArray[0] = new Image();
bluePillarImgArray[0].src = "/img/core-full@3x.png";
bluePillarImgArray[0].setAttribute("id", "mobile-core-pillar");
bluePillarImgArray[0].setAttribute("onClick", "togglePillars('core')");

bluePillarImgArray[1] = new Image();
bluePillarImgArray[1].src = "/img/modules-full@3x.png";
bluePillarImgArray[1].setAttribute("id", "mobile-modules-pillar");
bluePillarImgArray[1].setAttribute("onClick", "togglePillars('modules')");

bluePillarImgArray[2] = new Image();
bluePillarImgArray[2].src = "/img/tools-full@3x.png";
bluePillarImgArray[2].setAttribute("id", "mobile-tools-pillar");
bluePillarImgArray[2].setAttribute("onClick", "togglePillars('tools')");

var redPillarImgArray = new Array();

redPillarImgArray[0] = new Image();
redPillarImgArray[0].src = "/img/core-full-2@3x.png";
redPillarImgArray[0].setAttribute("id", "mobile-core-pillar");
redPillarImgArray[0].setAttribute("onClick", "togglePillars('core')");

redPillarImgArray[1] = new Image();
redPillarImgArray[1].src = "/img/modules-full-2@3x.png";
redPillarImgArray[1].setAttribute("id", "mobile-modules-pillar");
redPillarImgArray[1].setAttribute("onClick", "togglePillars('modules')");

redPillarImgArray[2] = new Image();
redPillarImgArray[2].src = "/img/tools-full-2@3x.png";
redPillarImgArray[2].setAttribute("id", "mobile-tools-pillar");
redPillarImgArray[2].setAttribute("onClick", "togglePillars('tools')");

// handle click of mobile toggle
function togglePillars(pillarSelection, shouldScrollTop) {
  if(!!shouldScrollTop) scrollToDiv();
  $(".slickCarousel").slick("slickGoTo", pillarsArr.indexOf(pillarSelection));
}

//nested carousel right/left functions
function nestedSlidePrev() {
  $(".carousel-nested").slick('slickPrev');;
}
function nestedSlideForw() {
  $(".carousel-nested").slick('slickNext');;
}

//handle change/update of carousel
function updateToggleMenu(currentSlide) {
  pillarsArr.forEach(function(p, index) {
    if (currentSlide === index && pillarsState[p] === false) {
      pillarsState[p] = true;
      $("#mobile-" + p + "-pillar").replaceWith(bluePillarImgArray[currentSlide]);
      document.getElementById("mobile-" + p + "-footer").style.color = "#ff0076";
      document.getElementById("slider-toggle").style.marginLeft = pillarsObject[p];
      document.getElementById("mobile-" + p + "-footer").setAttribute("class", "elc-icon-icn-" + p + " footer-toggle-items footer-arrow-up");
    } else if (currentSlide != index && pillarsState[p] === true) {
      pillarsState[p] = false;
      $("#mobile-" + p + "-pillar").replaceWith(redPillarImgArray[index]);
      document.getElementById("mobile-" + p + "-footer").style.color = "#333";
      document.getElementById("mobile-" + p + "-footer").setAttribute("class", "elc-icon-icn-" + p + " footer-toggle-items");
    }
  });
}

function scrollToDiv() {
  $('html,body').animate({scrollTop: $("#pillars-mobile-container").offset().top},'slow');
}

// listen for changes
$(".slickCarousel").on('afterChange', function (event, slick, currentSlide, nextSlide) {
  if(slick.options.parent){
    updateToggleMenu(currentSlide, false);
  }else if (!slick.options.parent){
    outerMostSlickElement.style.height = mobileToolsContent.clientHeight+"px";
  }
});

// Init Slick carousel
$(document).ready(function() {
  $(".slickCarousel").slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    speed: 210,
    parent: true
  });
  togglePillars("core");
  $(".carousel-nested").slick({
    parent: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: false,
    speed: 180,
    prevArrow: false,
    nextArrow: false,
    stopSwipePropagation: true
  });
  outerMostSlickElement = document.getElementsByClassName("slick-list draggable")[0];
  mobileToolsContent = document.getElementById("mobile-tools-content");
});
