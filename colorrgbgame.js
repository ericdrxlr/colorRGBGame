// ARRAY OF COLORS
let colors = [
    "rgb(255, 255, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)"
];

// QUERY SELECTORS
var squares = document.querySelectorAll(".square");
let pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");

colorDisplay.innerHTML = pickedColor;

// LOOP THROUGH SQUARES
for(var i = 0; i < squares.length; i++){
    // apply colors from array to respective squares
    squares[i].style.backgroundColor = colors[i];
}