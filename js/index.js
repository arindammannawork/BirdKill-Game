// set ground variable for animatin which run if i kill the bird
rootCss.style.setProperty("--ground", boardHeight + "px");
// for first time
creatNewBird();
cheakHighestScore();

bird.classList.add("move-bird");
backGroundSound.play();
setInterval(() => {
  backGroundSound.play();
}, 122000);
// Run our game loop
let gameLoop = setInterval(fn, moveBirdDuration);

// when i clicked mouse
board.addEventListener("click", (e) => {
  const gunShot = new Audio("../sounds/GunShot.mp3");
  gunShot.play();
  //   if i kill bird
  if (bird.contains(e.target)) {
    // debugger;

    killPosition = e.clientY;

    bird.style.top = e.clientY + "px";
    bird.style.left = e.clientX + "px";

    bird.classList.remove("move-bird");

    // fallingTime = 2000;
    fallingTime = (boardHeight - killPosition) * 3;
    // death bird animation
    deathBird();
    // creat new bird
    setTimeout(() => {
      // rootCss.style.setProperty("--randTop", boardHeight + "px");
      bird.classList.remove("bird-fall");
      rootCss.style.setProperty(
        "--backgroundImg",
        'url("../img/fliped.gif") center center no-repeat'
      );

      creatNewBird();
      bool = 10;
    }, 1500);
    // add score and display
    score += 1;
    ScoreDiv.innerHTML = `Score: ${score}`;

    // update highest score
    if (score > HighestScoreval) {
      HighestScoreval = score;
      localStorage.setItem("HighestScore", JSON.stringify(HighestScoreval));
      HighestScoreDiv.innerHTML = `HighestScore: ${HighestScoreval}`;
    }
  }
  // if i fail to kill bird
  else {
    chance -= 1;
    ChanceDiv.innerHTML = `Chance: ${chance}`;
    if (chance == 0) {
      alert(`Your Score: ${score}`);
      score = 0;
      ScoreDiv.innerHTML = `Score: ${score}`;
      chance = 5;
      ChanceDiv.innerHTML = `Chance: ${chance}`;
    }
  }

  moveBirdDuration = (150 - score) * 10;
});
