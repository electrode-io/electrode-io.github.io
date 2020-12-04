var mobileDropdownState = false;

function changeMobileDropdown(section) {
  mobileDropdownState = !mobileDropdownState;

  if (mobileDropdownState) {
    if (section == 1) {
      document.getElementById("mob-section-1").style.opacity = "1";
      document.getElementById("mob-section-1").style.height = "auto";
      document.getElementById("dropdown-arrow-1").style.display = "none";
    } else if (section == 2) {
      document.getElementById("mob-section-2").style.opacity = "1";
      document.getElementById("mob-section-2").style.height = "auto";
      document.getElementById("dropdown-arrow-2").style.display = "none";
    } else {
      document.getElementById("mob-section-3").style.opacity = "1";
      document.getElementById("mob-section-3").style.height = "auto";
      document.getElementById("dropdown-arrow-3").style.display = "none";
    }
  } else {
    if (section == 1) {
      document.getElementById("mob-section-1").style.opacity = "0";
      document.getElementById("mob-section-1").style.height = "0";
      document.getElementById("dropdown-arrow-1").style.display ="inline"
      document.getElementById("dropdown-arrow-1").src = "/img/mobile-page/arrow_down.svg";
    } else if (section == 2) {
      document.getElementById("mob-section-2").style.opacity = "0";
      document.getElementById("mob-section-2").style.height = "0";
      document.getElementById("dropdown-arrow-2").style.display ="inline"
      document.getElementById("dropdown-arrow-2").src = "/img/mobile-page/arrow_down.svg";
    } else {
      document.getElementById("mob-section-3").style.opacity = "0";
      document.getElementById("mob-section-3").style.height = "0";
      document.getElementById("dropdown-arrow-3").style.display ="inline"
      document.getElementById("dropdown-arrow-3").src = "/img/mobile-page/arrow_down.svg";
    }
  }
}
