let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
let greenDiv = document.querySelector(".green+div");
let yellowDiv = document.querySelector(".yellow+div");
let blueDiv = document.querySelector(".blue+div");
let redDiv = document.querySelector(".red+div");
let all = [red, blue, green, yellow];
let body = document.querySelector("body");

for (tap of all) {
  red.addEventListener("click", function () {
    greenDiv.classList.add("redAns");
  });

  blue.addEventListener("click", function () {
    yellowDiv.classList.add("redAns");
  });
  green.addEventListener("click", function () {
    blueDiv.classList.add("redAns");
  });
  yellow.addEventListener("click", function () {
    redDiv.classList.add("redAns");
  });
}
body.addEventListener("dblclick", function () {
  // console.log("key press");

  greenDiv.classList.remove("redAns");
  yellowDiv.classList.remove("redAns");
  blueDiv.classList.remove("redAns");
  redDiv.classList.remove("redAns");
});
