let score = document.getElementById("currentScore");
let high = document.getElementById("highScore");
let restartOption = document.getElementById("reStart");
let gameArea = document.getElementById("gameplay");
let scoring = false;
let track = document.getElementById("carTrack");
let player = {};
let car = document.getElementById("myCar");
let scorestart = document.getElementById("scoring");
player.start = false;
let gameButton = document.getElementById("startButton");

let sc = 0;

document.addEventListener("keydown", scoreStart);
document.addEventListener("keyup", scoreStop);

// restartOption.addEventListener("click", restart);

player.x = car.offsetLeft;
player.y = car.offsetTop;

document.addEventListener("keydown", carPos);

function carPos(event) {
  if (event.key == "ArrowRight" && player.x < 580) {
    scoring = true;
    player.x = player.x + 5;
  } else if (event.key == "ArrowLeft" && player.x > 150) {
    player.x = player.x - 5;
    scoring = true;
  }
  car.style.left = player.x + "px";
}

function scoreStart(event) {
  if (event.key === "ArrowUp" && player.y > -220) {
    scoring = true;

    player.y = player.y - 5;
    car.style.top = player.y + "px";
  }
  if (event.key === "ArrowDown" && player.y < 300) {
    scoring = true;
    player.y = player.y + 5;
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
    if (sc < 10) {
      scc = "0" + "0" + scc;
    } else if (sc >= 10 && sc < 100) {
      scc = "0" + scc;
    }
    score.innerHTML = scc;
  }
  // console.log(sc);
}
setInterval(scoringLoop, 100);

// gameButton.addEventListener("click", start);

if (player.start === false) {
  scorestart.style.display = "none";
}

gameButton.addEventListener("click", function () {
  player.start = true;
  gameButton.style.display = "none";
  scorestart.style.display = "flex";
  // linesMoving();
});

// MOVING STRIPs

let lineSpeed = 6;
let lines = document.querySelectorAll(".line");

for (let i = 0; i < lines.length; i++) {
  lines[i].style.top = `${i * 60}px`; // Set initial positions for each line
}

function moveLines() {
  for (let i = 0; i < lines.length; i++) {
    let currentTop = parseInt(lines[i].style.top) || 0;
    lines[i].style.top = currentTop + lineSpeed + "px";

    // Reset the position when a line goes below the container
    if (currentTop > 800) {
      // Adjust the value based on your road's height
      lines[i].style.top = "-40px"; // Place the line just above the container
    }
  }

  requestAnimationFrame(moveLines);
}
