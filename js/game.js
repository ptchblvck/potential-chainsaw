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
  for (let i = 0; i < 2; i++) {
    const cross = document.createElement("span");
    cross.className = "player-cross-filled";
    document.getElementById(fieldPosition).append(cross);
  }
  playerArray.push(fieldPosition);
  selectField(fieldPosition);
}

// npc function to draw a circle to field

function oToField(fieldPosition) {
  for (let i = 0; i < 1; i++) {
    const circle = document.createElement("div");
    circle.className = "computer-circle-filled";
    document.getElementById(fieldPosition).append(circle);
  }
  npcArray.push(fieldPosition);
  selectField(fieldPosition);
}

// writes picked field position with player string back into the array

function selectField(fieldPosition, player) {
  for (let i = 0; i < playedFields.length; i++) {
    if (playedFields.includes(fieldPosition)) {
      playedFields.splice(playedFields.indexOf(fieldPosition), 1, player);
    }
  }
}

const playFields = document.querySelectorAll(".field");

function playTheGame() {
  playFields.forEach((field) => {
    field.addEventListener("click", (e) => {
      console.log(e.target.id);
    });
  });
}

playTheGame();
