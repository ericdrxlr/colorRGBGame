// ARRAY OF COLORS
let colors = generateRandomColors(6);

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
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    let arr = [];
    // repeat num times
    for(var i = 0; i < num; i++){
    arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a red from 0 -255
    let r = Math.floor(Math.random() * 256);
    // pick a green from 0 -255
    let g = Math.floor(Math.random() * 256);
    // pick a blue from 0 -255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
