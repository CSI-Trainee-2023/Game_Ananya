let score = document.getElementById("currentScore");
let high = document.getElementById('highScore');
let restartOption = document.getElementById('reStart');
let gameArea = document.getElementById("gameplay");
let scoring = false;
let gameButton = document.getElementById('startButton');
let sc = 0;

document.addEventListener("keydown", scoreStart);
document.addEventListener("keyup", scoreStop);

function scoreStart(event) {
  if (event.key === "ArrowUp") {
    scoring = true;
    console.log("abc");
    scoringLoop();
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
    updateScore(sc);
    requestAnimationFrame(scoringLoop);
  }
}

function updateScore(scoreValue) {
  score.textContent = scoreValue.toString().padStart(3, "0");
}
  
