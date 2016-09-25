var mobilePillarContainer = document.getElementById("pillars-mobile-container");
var pillarContainerChildDivs = mobilePillarContainer.getElementsByTagName("div");

function togglePillars(button)
{
  for( i=0; i< pillarContainerChildDivs.length; i++ ) {
   if (pillarContainerChildDivs[i].id === button.id){
     pillarContainerChildDivs[i].setAttribute("class", "mobile-header-items selected");

     document.getElementById(button.id + "-content").setAttribute("class", "show");
   }else{
     pillarContainerChildDivs[i].setAttribute("class", "mobile-header-items");
     document.getElementById(pillarContainerChildDivs[i].id +'-content').setAttribute("class", "hide");
   }
  }
}

// Init call to set mobile-core pillar to default
togglePillars(document.getElementById("mobile-core"));
