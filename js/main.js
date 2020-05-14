const randomChoice = function () {
  /** makes a rock-paper-scissors random move
   * @return {string} the random choice made, it can be 'rock' 'paper' or 'scissors'
   */

  let keys = ["rock", "paper", "scissor"];
  let machineChoice = Math.floor(keys.length * Math.random());
  return keys[machineChoice];
};

const animateChoice = function () {
  /*
    Handles the animation of player choice and machine choice appearing in the screen
  */
  let playerDisplay = document.getElementById("player-choice");
  let machineDisplay = document.getElementById("machine-choice");

  if (document.getElementById("round-count").innerText != "0") {
    playerDisplay.style.opacity = 0;
    playerDisplay.style.left = "-20vw";

    machineDisplay.style.opacity = 0;
    machineDisplay.style.right = "-20vw";
  }

  let interval = setInterval(frame, 5);
  let pos = playerDisplay.offsetLeft * (100 / screen.width);
  let opac = Number(playerDisplay.style.opacity);
  function frame() {
    if (pos >= 20 && opac > 0.9) {
      clearInterval;
    } else {
      pos++;
      opac += 0.05;

      playerDisplay.style.opacity = opac;
      playerDisplay.style.left = pos + "vw";

      machineDisplay.style.opacity = opac;
      machineDisplay.style.right = pos + "vw";
    }
  }
};

const computeRound = function (playerChoice, machineChoice) {
  /**
   * Compute round and actualizes round counter and game stat counters(win, tie, lose)
   * @param {string} playerChoice The game choice made by the player
   * @param {string} machineChoice The game choice randomly generated
   */

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
  /*
   *Handles all the game functionality
   */
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
  animateChoice();

  // Change counters
  computeRound(playerChoice, machineChoice);
};
