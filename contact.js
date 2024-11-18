
const curser = document.querySelector(".curser");
const curser2 = document.querySelector(".curser2");

document.addEventListener("mousemove", function (e){

curser.style.cssText = curser2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px; ";


})
