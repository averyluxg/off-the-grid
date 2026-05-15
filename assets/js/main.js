// main.js

function randomNumber(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min;
}
let divs = document.querySelectorAll(".grid-container div");
function randomize(){
console.log(divs.length, "randomize! ")
}