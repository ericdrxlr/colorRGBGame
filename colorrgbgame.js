// VARIABLES
let colors = generateRandomColors(6);
let pickedColor = pickColor();
let numSquares = 6;

// QUERY SELECTORS
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

colorDisplay.innerHTML = pickedColor;

for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.innerHTML === "Easy" ? numSquares = 3: numSquares = 6;
        // if(this.innerHTML === "Easy"){
        //     numSquares = 3;
        // } else {
        //     numSquares = 6;
        // }
        reset();
    })
}

function reset(){
     // generate all new colors
     colors = generateRandomColors(numSquares);
     // pick new random color from array
     pickedColor = pickColor();
     messageDisplay.innerHTML = "";
     resetButton.innerHTML = "New Colors";
     // change colorDisplay match pickedColor
     colorDisplay.innerHTML = pickedColor;
     // change color of squares
     for(var i = 0; i < squares.length; i++){
         if(colors[i]){
             squares[i].style.backgroundColor = colors[i];
             squares[i].style.display = "block";
            } else {
            squares[i].style.display = "none";
         }
     }
     h1.style.backgroundColor = "steelblue";
}

//                         ONE OPTION OF EASY/HARD MODE
// EASY BUTTON CODE
// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.innerHTML = pickedColor;
//     for(var i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// // HARD BUTTON CODE
// hardBtn.addEventListener("click", function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.innerHTML = pickedColor;
//     for(var i = 0; i < squares.length; i++){ 
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })

// RESET GAME
resetButton.addEventListener("click", function(){
    reset();
})

// GAME SET BY LOOPING THROUGH SQUARES
for(var i = 0; i < squares.length; i++){
    // apply colors from array to respective squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.innerHTML = "Correct!";
            resetButton.innerHTML = "Play Again?";
            h1.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.innerHTML = "Try Again";
        }
    })
}

// FUNCTIONS
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
