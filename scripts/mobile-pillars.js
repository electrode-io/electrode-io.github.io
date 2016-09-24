var mobilePillerContainer = document.getElementsByClassName('pillars-section-2-mobile');
console.log(mobilePillerContainer);
function togglePillars(button)
{
  console.log(button);
  button.setAttribute("class", "selected");
  switch(button.id)
  {
    case "1":
         button.value = "OFF";
         break;
    case "2":
         button.value = "ON";
         break;
  }
}
