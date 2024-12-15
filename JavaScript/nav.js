document.addEventListener('DOMContentLoaded', function() {
  //OPEN/CLOSE NAV
  let button = document.querySelector(".toOpenButton");
  let menu = document.querySelector("nav")
  
  button.addEventListener("click", function(evt) {
    menu.classList.add("show");
    evt.stopPropagation();
  });
  
  document.addEventListener("click", function(event) {
    menu.classList.remove("show");
  });
});