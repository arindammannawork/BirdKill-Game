var rootCss = document.querySelector(":root");
let score = 0;
let preScore = 0;
let HighestScoreval;
let speed = 15 - score;
let chance = 5;

// let lastPaintTime = 0;
let birdPosition = {
  x: 5,
  y: 7,
};
let bird;
let board = document.getElementById("board");
let bool = 10;
let ScoreDiv = document.getElementById("Score");
let HighestScoreDiv = document.getElementById("HighestScore");
let ChanceDiv = document.getElementById("Chance");
const backGroundSound = new Audio("../sounds/mixkit-walking-dead-893.mp3");
backGroundSound.volume = 0.2;
let boardWidth = board.offsetWidth - 50;
let boardHeight = board.offsetHeight - 50;
let randDirVal;
let randHeightVal;
let randWidthVal;
let birdDir = [
  {
    top: -1,
    left: -1,
  },
  {
    top: -1,
    left: +0,
  },
  {
    top: -1,
    left: +1,
  },
  {
    top: +0,
    left: +1,
  },
  {
    top: +1,
    left: +1,
  },
  {
    top: +1,
    left: +0,
  },
  {
    top: +1,
    left: -1,
  },
  {
    top: +0,
    left: -1,
  },
];
let LeftVal = 0;
let TopVal = 0;
let PreLeftVal = 0;
let PreTopVal = 0;
let randTop;
let randLeft;
let Preangle = 0;
let angle;
let killPosition;
let fallingTime;
const fallAudio = new Audio("../sounds/falling.wav");
let moveBirdDuration = 1500;
