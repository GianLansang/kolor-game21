//=====================================
// HELPER FUNCTIONS
//=====================================
  const pickColor = () => {
      //Get random number between 0 and 5, inclusive
      const random = Math.floor(Math.random() * colors.length);
      return colors[random]
  } 

const generateRandomColor = () => {
    //pick r, g, b values between 0 & 255
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

const generateRandomColors = (num) => {
    //make an array
    let output = [];
    // add num random colors to array
    for(let i=0; i < num; i++) {
        output.push(generateRandomColor())
    }
    // return array
    return output;
}

 const changeColors = (color) => {
        squares.forEach((square)=> {
            square.style.backgroundColor = color;
        })
    }

const reset = () => {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    resetButton.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i]
        }else {
            squares[i].style.backgroundColor = "black";
        }
    }
    title.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}
//=====================================
// INIT VARIABLES
//=====================================
// State
let numSquares = 6;

//Select Elements
    const squares = document.querySelectorAll(".square");
    const colorDisplay = document.getElementById("colorDisplay");
    const message = document.getElementById('message');
    const title = document.querySelector('h1');
    const resetButton = document.getElementById('resetButton');
    const modeButton = document.querySelectorAll('.mode');
let colors = generateRandomColors(numSquares);
// Choose winning color
let pickedColor = pickColor();
//=====================================
// MAIN
//=====================================

//Update colorDisplay
colorDisplay.textContent = pickedColor;
// Reset Colors Button
resetButton.addEventListener("click", reset);
// Mode Buttons
modeButton.forEach((button)=>{
    button.addEventListener("click", function() {
        modeButton[0].classList.remove("selected")
        modeButton[1].classList.remove("selected")
        this.classList.add("selected");
        if(this.textContent === "EASY") {
            numSquares = 3;
        }
        else {
            numSquares = 6;
        }
        reset();
    });
});


// easyButton.addEventListener("click", function(){
    
//     this.classList.add("selected");
//     hardButton.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++){
//         if(colors[i]){
//             squares[i].style.backgroundColor = colors[i];
//         }
//         else {
//             squares[i].style.display = "none";
//         }
//     }
// })
// hardButton.addEventListener("click", function(){
//     this.classList.add("selected");
//     easyButton.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })
// Set Up squares
    for (let i=0; i < squares.length; i++) {
       squares[i].style.backgroundColor = colors[i]; 
    // Add click listeners
    squares[i].addEventListener("click", function() {
        //Get the color of the clicked square
        const clickedColor = this.style.backgroundColor;
        console.log(clickedColor);
        // Compare that color to pickedColor
        if (clickedColor === pickedColor) {
           message.textContent='Correct';
            changeColors(pickedColor);
            title.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?"
        }else{
            this.style.backgroundColor = "black";
            message.textContent = "You lose"
        }
    })
    }

   
    
