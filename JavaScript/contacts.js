document.addEventListener('DOMContentLoaded', function() {
  document.querySelector("#dei").addEventListener('click', () => {
    document.querySelector("#info_dei").classList.toggle("hide");
  });
  
  document.querySelector("#darq").addEventListener('click', () => {
    document.querySelector("#info_darq").classList.toggle("hide");
  });
  
  document.querySelector("#uc").addEventListener('click', () => {
    document.querySelector("#info_uc").classList.toggle("hide");
  });
});
