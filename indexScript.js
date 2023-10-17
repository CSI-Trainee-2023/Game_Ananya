let score = document.getElementById("currentScore");
let high = document.getElementById('highScore');
let restartOption = document.getElementById('reStart');
let gameArea = document.getElementById("gameplay");
let scoring = false;
let player = {};
let car = document.getElementById('car');
let scorestart = document.getElementById('scoring');
let gameButton = document.getElementById('startButton');
player.start = false;
let sc = 0;

document.addEventListener("keydown", scoreStart);
document.addEventListener("keyup", scoreStop);

function scoreStart(event) {
  if (event.key === "ArrowUp") {
    scoring = true;
    player.start = true;
    player.y = (player.y - 5);
    car.style.top = player.y + "px";
    console.log(player.y);
    
    scoringLoop();
  }
}

function scoreStop(event) {
  if (event.key === "ArrowUp") {
    scoring = false;
    player.start = false;
    
  }
}

function scoringLoop() {
  if (scoring) {
    sc++;
    updateScore(sc);
    requestAnimationFrame(scoringLoop);
  }
}

function updateScore(scoreValue) {
  score.textContent = scoreValue.toString().padStart(3, "0");
}
  
// gameButton.addEventListener("click", start);

if(player.start === false){
  scorestart.style.display = 'none';
}

gameButton.addEventListener('click', function () {
  player.start = true;
  gameButton.style.display = 'none';
  scorestart.style.display = 'flex';
});
   
player.x = car.offsetLeft;
player.y = car.offsetTop;

