// chose your game mode

const gameMode = document.getElementById("chose-wisely");
const gameModeSub = document.getElementById("game-option-ok");
const player2Computer = document.querySelector(
  "body > main > div > div.text-result > div.computer > h1"
);

// variables

let clicked = false;

gameModeSub.addEventListener("click", () => {
  event.preventDefault();
  clicked = true;
  decideGameMode();
  initalizeBoard();
});

function initalizeBoard() {
  if (clicked === true) {
    gameMode.style.display = "none";
    fields.style.display = "grid";
  }
}

// game mode choice: player or npc

const playVsPlayer = document.getElementById("one-vs-one");
const playVsComputer = document.getElementById("solo-play");

function decideGameMode() {
  if (playVsPlayer.checked == true) {
    player2Computer.textContent = "Player2:";
    initializePlayer2();
  }
  if (playVsComputer.checked == true) {
    player2Computer.textContent = "Computer:";
    initializeComputer();
  }

  console.log(activePlayers);
}

function initializeComputer() {
  console.log("computer has joined.");
  activePlayers.push(cpu);
  // TODO do something
}

function initializePlayer2() {
  console.log("player2 has joined.");
  activePlayers.push(player2);
}
