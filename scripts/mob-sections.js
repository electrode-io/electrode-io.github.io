var mobileDropdownState = false;

function changeMobileDropdown(section) {
  mobileDropdownState = !mobileDropdownState;

  if (mobileDropdownState) {
    if (section == 1) {
      document.getElementById("mob-section-1").style.opacity = "1";
      document.getElementById("mob-section-1").style.height = "auto";
    } else if (section == 2) {
      document.getElementById("mob-section-2").style.opacity = "1";
      document.getElementById("mob-section-2").style.height = "auto";
    } else {
      document.getElementById("mob-section-3").style.opacity = "1";
      document.getElementById("mob-section-3").style.height = "auto";
    }
  } else {
    if (section == 1) {
      document.getElementById("mob-section-1").style.opacity = "0";
      document.getElementById("mob-section-1").style.height = "0";
    } else if (section == 2) {
      document.getElementById("mob-section-2").style.opacity = "0";
      document.getElementById("mob-section-2").style.height = "0";
    } else {
      document.getElementById("mob-section-3").style.opacity = "0";
      document.getElementById("mob-section-3").style.height = "0";
    }
  }
}