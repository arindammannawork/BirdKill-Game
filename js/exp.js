bird = document.createElement("div");
board.appendChild(bird);

setInterval(() => {
  // backGroundSound.play();
  if (bool == 10) {
    changeBirdPosition();
  }
}, 2000);
// Game Functions
let changeBirdPosition = () => {
  birdPosition.x = Math.floor(Math.random() * 11);
  birdPosition.y = Math.floor(Math.random() * 7);
  // display bird

  //   creat a bird div

  bird.style.gridRowStart = birdPosition.y;
  bird.style.gridColumnStart = birdPosition.x;
  bird.classList.add("bird_img");
};

let cheakHighestScore = () => {
  let HighestScore = localStorage.getItem("HighestScore");
  if (HighestScore === null) {
    HighestScoreval = 0;
    localStorage.setItem("HighestScore", JSON.stringify(HighestScoreval));
  } else {
    HighestScoreval = JSON.parse(HighestScore);
    HighestScoreDiv.innerHTML = `HighestScore: ${HighestScoreval}`;
  }
};
// backGroundSound.play();
cheakHighestScore();
board.addEventListener("click", (e) => {
  const gunShot = new Audio("../sounds/GunShot.mp3");
  gunShot.play();
  // cheak highest score
  cheakHighestScore();
  //   if i kill bird
  if (bird.contains(e.target)) {
    // gunShot.stop();
    changeBirdPosition();
    score += 1;
    ScoreDiv.innerHTML = `Score: ${score}`;

    // update highest score
    if (score > HighestScoreval) {
      HighestScoreval = score;
      localStorage.setItem("HighestScore", JSON.stringify(HighestScoreval));
      HighestScoreDiv.innerHTML = `HighestScore: ${HighestScoreval}`;
    }

    bool = 0;
    setTimeout(() => {
      bool = 10;
    }, speed * 100);
  }
  // if i fail to kill bird
  else {
    chance -= 1;
    ChanceDiv.innerHTML = `Chance: ${chance}`;
    if (chance == 0) {
      alert("Game Over");
    }
  }
});
