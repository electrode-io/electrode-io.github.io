// toggle function to toggle currently selected pillar in mobile view

var pillarsArr = ["core", "modules", "tools"];

function togglePillars(pillarSelection) {

  pillarsArr.forEach(function(p){
    if (pillarSelection === p){
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

// Init call to set mobile-core pillar as default
//togglePillars("core");
