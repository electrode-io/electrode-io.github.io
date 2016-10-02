// State
var pillarsArr = ["core", "modules", "tools"];
var pillarsObject = {"core": "2.5%", "modules": "36%", "tools": "69%"};
var pillarsState = {"core": false, "modules": false, "tools": false};

// save refs to elements repeatedly used
var outerMostSlickElement;
var mobileToolsConent;

// Init Slick carousel
$(document).ready(function() {
  $(".slickCarousel").slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    dots: false,
    prevArrow: false,
    nextArrow: false,
    speed: 220,
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

// handle click of moble toggle
function togglePillars(pillarSelection, shouldScrollTop) {
  if(!!shouldScrollTop) scrollToDiv();
  $(".slickCarousel").slick("slickGoTo", pillarsArr.indexOf(pillarSelection));
}

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
      document.getElementById("mobile-" + p + "-pillar").setAttribute("src", "/img/" + p + "-full@3x.png");
      document.getElementById("mobile-" + p + "-footer").style.color = "#ff0076";
      document.getElementById("slider-toggle").style.marginLeft = pillarsObject[p];
      document.getElementById("mobile-" + p + "-footer").setAttribute("class", "elc-icon-icn-" + p + " footer-toggle-items footer-arrow-up");
    } else if (currentSlide != index && pillarsState[p] === true) {
      pillarsState[p] = false;
      document.getElementById("mobile-" + p + "-pillar").setAttribute("src", "/img/" + p + "-full-2@3x.png");
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
  console.log(slick);
    if(slick.options.parent){
      updateToggleMenu(currentSlide, false);
    }else if (!slick.options.parent){
      outerMostSlickElement.style.height = mobileToolsContent.clientHeight+"px";
    }
});
