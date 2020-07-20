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
let pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.innerHTML = pickedColor;

// LOOP THROUGH SQUARES
for(var i = 0; i < squares.length; i++){
    // apply colors from array to respective squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.innerHTML = "Correct!";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.innerHTML = "Try Again";
        }
    })
}

function changeColors(color){
    // loop through squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
       squares[i].style.backgroundColor = color; 
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
