// JavaScript Document
console.log("hi");


var menuButton = document.querySelector("header > button");
var navigatie = document.querySelector("nav");
menuButton.onclick = openMenu;


function openMenu() {
  navigatie.classList.add("toonMenu");
}


var closeButton = document.querySelector("nav button")
closeButton.onclick = closeMenu;


function closeMenu() {
  navigatie.classList.remove("toonMenu")
}




// HEADER DIE VERANDERD ALS JE SCROLLT

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) { 
        console.log("kleur")
        header.classList.add("scrolled");
    } else {
      console.log("transparent")
        header.classList.remove("scrolled");
    }
});

