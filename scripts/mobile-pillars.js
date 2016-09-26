// toggle function to toggle currently selected pillar in mobile view

var pillarsArr = ["core", "modules", "tools"];

function togglePillars(pillarSelection) {

  pillarsArr.forEach(function(p){
    if (pillarSelection === p){
      document.getElementById("mobile-"+ p).setAttribute("class", "mobile-header-items selected");
      document.getElementById("mobile-" + p + "-content").setAttribute("class", "show");
      document.getElementById("mobile-" + p + "-footer").style.color = "#ff0076";
    }else{
      document.getElementById("mobile-"+ p).setAttribute("class", "mobile-header-items");
      document.getElementById("mobile-" + p + "-content").setAttribute("class", "hide");
      document.getElementById("mobile-" + p + "-footer").style.color = "#333";
    }
  });
};

// Init call to set mobile-core pillar as default
togglePillars("core");
