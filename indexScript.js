let score = document.getElementById("currentScore");
let high = document.getElementById('highScore');
let restartOption = document.getElementById('reStart');
let gameArea = document.getElementById("gameplay");
let scoring = false;
let player = {};
let car = document.getElementById('myCar');
let scorestart = document.getElementById('scoring');
player.start = false;
let gameButton = document.getElementById('startButton');
let roadLine = document.getElementById('lines');

let sc = 0;

document.addEventListener("keydown", scoreStart);
document.addEventListener("keyup", scoreStop);


player.x = car.offsetLeft;
player.y = car.offsetTop;


document.addEventListener("keydown", carPos);

function carPos(event){
  if((event.key == "ArrowRight")&&(player.x < 925)){
    
    player.x = player.x + 5;
    console.log(player.x);
  }
  else if((event.key == "ArrowLeft")&&(player.x > 565)){
    
    player.x = player.x - 5;
  }
  
  car.style.left = player.x + "px";
}




function scoreStart(event) {
  if (event.key === "ArrowUp") {
    scoring = true;
    
    player.y = (player.y - 5);
    car.style.top = player.y + "px";
  }
}
    
function scoreStop(event) {
  if (event.key === "ArrowUp") {
    scoring = false;
  }
}
    
function scoringLoop() {
  if (scoring) {
    sc++;
    let scc = sc;
    if(sc < 10){
      scc = '0' + '0' + scc;
    }
    else if(sc >= 10 && sc < 100){
      scc = '0' + scc;
    }
    score.innerHTML = scc;
  }
  // console.log(sc);
}
setInterval(scoringLoop, 100);
    
// gameButton.addEventListener("click", start);

if(player.start === false){
  scorestart.style.display = 'none';
}

gameButton.addEventListener('click', function (){
  player.start = true;
  gameButton.style.display = 'none';
  scorestart.style.display = 'flex';
});
    


    
    


  
   


