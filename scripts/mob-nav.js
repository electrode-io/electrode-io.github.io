var dropDownMenuState= false,
    electrodeNav = document.getElementById("electrode-nav"),
    ernHeader = document.getElementById("ern-header");

function changeMobileNav(){
  dropDownMenuState = !dropDownMenuState;

  if(dropDownMenuState){
    if (electrodeNav) {
      document.getElementById("electrode-nav").style.backgroundColor = "#000e23";
    } else {
      document.getElementById("ern-header").style.backgroundImage = "none";
    }
    document.getElementById("electrode-mobile-nav").style.backgroundColor = "#000e23";
    document.getElementById("mob-header-icon").setAttribute("src", "/img/mob-close.svg");
    document.getElementById("walmart-header-logo").style.display = "none";
  } else {
    if (electrodeNav) {
    document.getElementById("electrode-nav").style.backgroundColor = "#00294b";
    } else {
      document.getElementById("ern-header").style.backgroundImage = "url('/img/mobile-page/ern_bkgd_nav.png')";
      document.getElementById("electrode-mobile-nav").style.backgroundColor = "transparent";
    }
    document.getElementById("mob-header-icon").setAttribute("src", "/img/mob-menu.svg");
    document.getElementById("walmart-header-logo").style.display = "block";
  }
};

var windowWidth = window.innerWidth;

function changeDesktopColor() {
  if (window.innerWidth > 767) {
    if (electrodeNav) {
      document.getElementById("electrode-nav").style.backgroundColor = "#00294b";
    } else {
      document.getElementById("electrode-mobile-nav").style.backgroundColor = "transparent";
      document.getElementById("ern-header").style.backgroundImage = "url('/img/mobile-page/ern_bkgd_nav.png')";
    }
    document.getElementById("walmart-header-logo").style.display = "block";
  } else {
    if (dropDownMenuState) {
      if (electrodeNav) {
        document.getElementById("electrode-nav").style.backgroundColor = "#000e23";
      } else {
        document.getElementById("ern-header").style.backgroundImage = "url('/img/mobile-page/ern_bkgd_nav.png')";
        document.getElementById("electrode-mobile-nav").style.backgroundColor = "#000e23";
      }
      document.getElementById("walmart-header-logo").style.display = "none";
    }
  }
}

window.addEventListener("resize", changeDesktopColor);
