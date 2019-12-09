
var numOfSquares =6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msgDisplay");
var h1 = document.querySelector("h1");
var resetBotton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");


init();

function init(){
// Mode buttons
  setupModeBtn();
// Squares
  setupSquares();
// Reset
  gameReset();
}

function setupModeBtn(){
  for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function(){
      modeBtn[0].classList.remove("selected");
      modeBtn[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent ==="Facíl" ? numOfSquares =3: numOfSquares = 6;
      gameReset();
    });
  }
};

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      //pega a cor que esta no quadrado
      var clickedColor =  this.style.backgroundColor;
      //Comparar com a cor no display
      if (clickedColor === pickedColor){
        msgDisplay.textContent = "Correta!";
        resetBotton.textContent = "Jogue Outra Vez!"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        msgDisplay.textContent = "Tente Outra vez!";
      }
    })
  };
};

function gameReset(){
    colors = generateRandomColors(numOfSquares);
    pickedColor = colors[pickColor()];
    colorDisplay.textContent = pickedColor
    for (var i = 0; i < squares.length; i++) {
      if (colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display = "none";
      }
      
    };
    h1.style.backgroundColor = "steelblue";
    msgDisplay.textContent = "";
    resetBotton.textContent = "Novas Cores"
}
resetBotton.addEventListener("click", gameReset);

function changeColors(color){
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = color;
  }
};

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return(random);
};

function generateRandomColors(num) {
  var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(randomColor());
      
    }

  return arr;
};

function randomColor(){
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r +", " + g + ", " + b +")";
}