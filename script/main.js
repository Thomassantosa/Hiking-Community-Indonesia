var menuToggle = document.querySelector("#menu");
var nav = document.querySelector(".nav");

menuToggle.addEventListener("click", function(){
    nav.classList.toggle("slide");
});