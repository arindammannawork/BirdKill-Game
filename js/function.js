function fn() {
  if (bool == 10) {
    gameEngine();
  }
  // i do this for dynamic time to run setinterval
  clearInterval(gameLoop);

  gameLoop = setInterval(fn, moveBirdDuration);
}
let randDir = () => {
  randDirVal = Math.floor(7 * Math.random());

  TopVal = birdDir[randDirVal].top * 100 + PreTopVal;
  LeftVal = birdDir[randDirVal].left * 100 + PreLeftVal;
  // chek is bird in board or not, if not then recall this again
  if (
    TopVal >= boardHeight ||
    LeftVal >= boardWidth ||
    LeftVal < 0 ||
    TopVal < 0
  ) {
    randDir();
  }
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
let creatNewBird = () => {
  board.innerHTML = "";
  bird = document.createElement("div");
  randTop = Math.floor(boardHeight * Math.random());
  randLeft = Math.floor(boardWidth * Math.random());
  rootCss.style.setProperty("--randLeft", randLeft + "px");
  rootCss.style.setProperty("--randTop", randTop + "px");
  bird.classList.add("bird-img");
  board.appendChild(bird);
};

let deathBird = () => {
  bool = 1;
  fallAudio.play();
  rootCss.style.setProperty("--killPosition", killPosition + "px");
  // first chenge the background
  rootCss.style.setProperty(
    "--backgroundImg",
    'url("../img/deadBird-removebg-preview.png") center center no-repeat'
  );
  // add amination class and remove move-bird becuse 1 div can hav max 1 animation
  bird.classList.add("bird-fall");
};

let gameEngine = () => {
  bird.classList.remove("move-bird");
  bird.classList.remove("angle-change");

  moveBirdDuration = (15 - score) * 100;

  rootCss.style.setProperty("--moveBirdDuration", moveBirdDuration + "ms");
  rootCss.style.setProperty("--angle", 0 + "deg");

  PreTopVal = bird.offsetTop;
  PreLeftVal = bird.offsetLeft;
  rootCss.style.setProperty("--PreTopVal", PreTopVal + "px");
  rootCss.style.setProperty("--PreLeftVal", PreLeftVal + "px");

  randDir();
  switch (randDirVal) {
    case 0:
      rootCss.style.setProperty("--angle", 30 + "deg");
      rootCss.style.setProperty(
        "--backgroundImg",
        'url("../img/fliped.gif") center center no-repeat'
      );

      break;
    case 1:
      break;
    case 2:
      rootCss.style.setProperty("--angle", -30 + "deg");
      rootCss.style.setProperty(
        "--backgroundImg",
        'url("../img/croped.gif") center center no-repeat'
      );

      break;
    case 3:
      rootCss.style.setProperty(
        "--backgroundImg",
        'url("../img/croped.gif") center center no-repeat'
      );

      break;
    case 4:
      rootCss.style.setProperty("--angle", 30 + "deg");
      rootCss.style.setProperty(
        "--backgroundImg",
        'url("../img/croped.gif") center center no-repeat'
      );

      break;
    case 5:
      break;
    case 6:
      rootCss.style.setProperty("--angle", -30 + "deg");
      rootCss.style.setProperty(
        "--backgroundImg",
        'url("../img/fliped.gif") center center no-repeat'
      );

      break;
    case 7:
      rootCss.style.setProperty(
        "--backgroundImg",
        'url("../img/fliped.gif") center center no-repeat'
      );

      break;

    default:
      break;
  }
  bird.classList.add("angle-change");

  rootCss.style.setProperty("--TopVal", TopVal + "px");
  rootCss.style.setProperty("--LeftVal", LeftVal + "px");

  setTimeout(() => {
    bird.style.top = TopVal + "px";
    bird.style.left = LeftVal + "px";
  }, moveBirdDuration);

  //   console.log(LeftVal);
  bird.classList.add("move-bird");
};
