var dropDownMenuState= false;

function changeMobileNav(){
  dropDownMenuState = !dropDownMenuState;

  if(dropDownMenuState){
    document.getElementById("electrode-nav").style.backgroundColor = "#000e23";
    document.getElementById("mob-header-icon").setAttribute("src", "/img/mob-close.svg");
    document.getElementById("walmart-header-logo").style.display = "none";
  } else {
    document.getElementById("electrode-nav").style.backgroundColor = "#00294b";
    document.getElementById("mob-header-icon").setAttribute("src", "/img/mob-menu.svg");
    document.getElementById("walmart-header-logo").style.display = "block";
  }
};

var windowWidth = window.innerWidth;

function changeDesktopColor() {
  if (window.innerWidth > 767){
    document.getElementById("electrode-nav").style.backgroundColor = "#00294b";
  } else {
    if (dropDownMenuState) {
      document.getElementById("electrode-nav").style.backgroundColor = "#000e23";
    }
  }
}

window.addEventListener("resize", changeDesktopColor);
