const randomChoice = function () {
  let keys = ["rock", "paper", "scissor"];
  let machineChoice = Math.floor(keys.length * Math.random());
  return keys[machineChoice];
};

const showRound = function () {
  if (document.getElementById("round-count").innerText == 0) {
    let playerDisplay = document.getElementById("player-choice");
    let machineDisplay = document.getElementById("machine-choice");

    playerDisplay.style.opacity = 1;
    playerDisplay.style.left = "20vw";

    machineDisplay.style.opacity = 1;
    machineDisplay.style.right = "20vw";
  }
};

const computeRound = function (playerChoice, machineChoice) {
  // Add one to the round count
  let roundCount = document.getElementById("round-count");
  roundCount.innerText = Number(roundCount.innerText) + 1;

  if (playerChoice == machineChoice) {
    // If there was a tie, add one to tie count
    let tieCount = document.getElementById("tie-count");
    tieCount.innerText = Number(tieCount.innerText) + 1;
  } else if (
    // If player won, add one to win count
    (playerChoice == "rock" && machineChoice == "scissor") ||
    (playerChoice == "paper" && machineChoice == "rock") ||
    (playerChoice == "scissor" && machineChoice == "paper")
  ) {
    let winCount = document.getElementById("win-count");
    winCount.innerText = Number(winCount.innerText) + 1;
  } else {
    // If player lost, add one to lose count
    let loseCount = document.getElementById("lose-count");
    loseCount.innerText = Number(loseCount.innerText) + 1;
  }
};

const play = function (element) {
  let options = {
    rock: "url('../img/rock.png')",
    paper: "url('../img/paper.png')",
    scissor: "url('../img/scissors.png')",
  };

  //   Setting image for player option
  let playerChoice = element.id;
  document.getElementById("player-choice").style.backgroundImage =
    options[playerChoice];

  // Setting image for machine option
  let machineChoice = randomChoice();
  document.getElementById("machine-choice").style.backgroundImage =
    options[machineChoice];

  // Display round
  showRound();

  // Change counters
  computeRound(playerChoice, machineChoice);
};
