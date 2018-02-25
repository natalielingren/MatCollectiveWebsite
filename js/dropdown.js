"use strict";
var menuButton = document.querySelector("#menu-button");
var navItems = document.querySelector("#main-nav");
var width = window.innerWidth;

function resize(){
  width = window.innerWidth;
  console.log(width);
}

window.onresize = resize;
// window.addEventListener("resize",function(){
//   width = window.innerWidth;
//
//
//
//
// if(width < 768){
//   console.log("break point menu button activated");
//   menuButton.classList.remove("hidden");
//   navItems.classList.add("hidden");

// menuButton.addEventListener("click",function(){
//   console.log("clicked a button");
//   if(navItems.classList.contains("hidden")){
//     console.log("hide the nav");
//     navItems.classList.remove("hidden");
//     navItems.setAttribute("aria-hidden","true");
//   }else{
//     console.log("show the nav");
//     navItems.classList.add("hidden");
//     navItems.setAttribute("aria-hidden","false");
//   }
// })
// }else{
//   menuButton.classList.add("hidden");
//   navItems.classList.remove("hidden");
// }
// return width = width;
// })


if(width < 768){
  console.log("second width selector");
  menuButton.classList.remove("hidden");
  navItems.classList.add("hidden");

menuButton.addEventListener("click",function(){
  console.log("clicked a button");
  if(navItems.classList.contains("hidden")){
    console.log("hide the nav");
    navItems.classList.remove("hidden");
    navItems.setAttribute("aria-hidden","true");
  }else{
    console.log("show the nav");
    navItems.classList.add("hidden");
    navItems.setAttribute("aria-hidden","false");
  }
})
}else{
  menuButton.classList.add("hidden");
  navItems.classList.remove("hidden");
}
