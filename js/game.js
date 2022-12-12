// tia tac toe variables

const colorDivArray = [];
let playerChoice;
let npcChoice;
let gameState = true;
const availableFields = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const playedFields = availableFields.map((e) => e);
const playerArray = [];
const npcArray = [];

let playedGames = 0;

// chose your game mode

const player2Computer = document.querySelector(
  "body > main > div > div.text-result > div.computer > h1"
);

function gameModeOption() {}

// winning combinations
function winning(board, player) {
  /* board is the array with all the fields while player is the 
     string that has to be the filled field */

  if (
    (board[0] == player && board[1] == player && board[2] == player) ||
    (board[3] == player && board[4] == player && board[5] == player) ||
    (board[6] == player && board[7] == player && board[8] == player) ||
    (board[0] == player && board[3] == player && board[6] == player) ||
    (board[1] == player && board[4] == player && board[7] == player) ||
    (board[2] == player && board[5] == player && board[8] == player) ||
    (board[0] == player && board[4] == player && board[8] == player) ||
    (board[2] == player && board[4] == player && board[6] == player)
  ) {
    return true;
  } else {
    return false;
  }
}

// draw X into parameter  //? (<div id="fieldPosition"></div>)

function xToField(fieldPosition) {
  if (playedFields[fieldPosition - 1] == "p") {
    return false;
  }
  for (let i = 0; i < 2; i++) {
    const cross = document.createElement("span");
    cross.className = "player-cross-filled";
    document
      .querySelector("#field" + fieldPosition + " > div.field-content")
      .append(cross);
  }
  playerArray.push(fieldPosition);
}

// npc function to draw a circle to field

function oToField(fieldPosition) {
  if (playedFields[fieldPosition - 1] == "c") {
    return false;
  }
  for (let i = 0; i < 1; i++) {
    const circle = document.createElement("div");
    circle.className = "computer-circle-filled";
    document
      .querySelector("#field" + fieldPosition + " > div.field-content")
      .append(circle);
  }
  npcArray.push(fieldPosition);
}

// writes picked field position with player string back into the array

function selectField(fieldPosition, player) {
  for (let i = 0; i < playedFields.length; i++) {
    if (playedFields.includes(fieldPosition)) {
      playedFields.splice(playedFields.indexOf(fieldPosition), 1, player);
    }
  }
}

// every field ever

const playFields = document.querySelectorAll(".field");

// player clicked field written to playedFields array with "p"

function playerPick() {
  playFields.forEach((field) => {
    field.addEventListener("click", (e) => {
      const pickedFieldId = e.target.id;
      const pickedFieldIndexNumber = parseInt(pickedFieldId.slice(5, 6));
      console.log(pickedFieldIndexNumber);
      xToField(pickedFieldIndexNumber);
      selectField(pickedFieldIndexNumber, "p1");
      console.log(playedFields);
      playedGames++;
      game();
    });
  });
}

playerPick();

// determin who wins!

function game() {
  if (winning(playedFields, "p1")) {
    console.log("Player Wins!");
    document.querySelector("h1").textContent = "Player1 Wins!";
  }
  if (winning(playedFields, "p2")) {
    console.log("Player Wins!");
    document.querySelector("h1").textContent = "Player2 Wins!";
  }
  if (winning(playedFields, "c")) {
    console.log("Computer Wins!");
    document.querySelector("h1").textContent = "Computer Wins!";
  }
  if (playedGames > 5) {
    console.log("It's a Draw!");
    document.querySelector("h1").textContent = "It's a Draw!";
  }
}
