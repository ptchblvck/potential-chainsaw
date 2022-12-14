// tia tac toe variables

const colorDivArray = [];
let playerChoice;
let npcChoice;
let gameState = true;
const availableFields = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const playedFields = availableFields.map((e) => e);
const playerArray = [];
const npcArray = [];
const player1 = "p1";
const player2 = "p2";
const cpu = "c";
const activePlayers = [];

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

// check if field was already picked by either player

function fieldStillEmpty(fieldPosition) {
  if (
    playedFields[fieldPosition] == activePlayers[0] ||
    playedFields[fieldPosition] == activePlayers[1]
  ) {
    return true;
  } else return false;
}

// draw X into parameter  //? (<div id="fieldPosition"></div>)

function xToField(fieldPosition) {
  let fieldID = "#field" + (fieldPosition + 1);
  for (let i = 0; i < 2; i++) {
    const cross = document.createElement("span");
    cross.className = "player-cross-filled";
    document.querySelector(fieldID + " > div.field-content").append(cross);
  }
  playerArray.push(fieldPosition);
}

// npc function to draw a circle to field

function oToField(fieldPosition) {
  let fieldID = "#field" + (fieldPosition + 1);
  for (let i = 0; i < 1; i++) {
    const circle = document.createElement("div");
    circle.className = "computer-circle-filled";
    document.querySelector(fieldID + " > div.field-content").append(circle);
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

function gameStart() {
  playFields.forEach((field) => {
    field.addEventListener("click", (e) => {
      const pickedFieldIndexNumber = parseInt(e.target.id.slice(5, 6)) - 1;
      if (fieldStillEmpty(pickedFieldIndexNumber)) {
        return false;
      }
      if (gameState === true && !fieldStillEmpty(pickedFieldIndexNumber)) {
        if (playedGames % 2 == 0) {
          xToField(pickedFieldIndexNumber);
          selectField(pickedFieldIndexNumber, activePlayers[0]);
        }
        if (playedGames % 2 != 0) {
          oToField(pickedFieldIndexNumber);
          selectField(pickedFieldIndexNumber, activePlayers[1]);
        }
        playedGames++;
        console.log(playedFields);
        gameWinner();
        console.log(playedGames);
        console.log(gameState);
      }
    });
  });
}

activePlayers.push(player1);
gameStart();

// determin who wins!

function gameWinner() {
  if (winning(playedFields, player1)) {
    console.log("Player1 Wins!");
    document.querySelector("h1").textContent = "Player1 Wins!";
    gameState = false;
  }
  if (winning(playedFields, player2)) {
    console.log("Player2 Wins!");
    document.querySelector("h1").textContent = "Player2 Wins!";
    gameState = false;
  }
  if (winning(playedFields, cpu)) {
    console.log("Computer Wins!");
    document.querySelector("h1").textContent = "Computer Wins!";
    gameState = false;
  }
  if (playedGames > 7) {
    console.log("It's a Draw!");
    document.querySelector("h1").textContent = "It's a Draw!";
  }
}

// minimax algorithm & AI

function bestSpot() {}

// function miniMax() {
//   const availableSpots = [];
//   playFields.map((e) => );
//   console.log(availableSpots);
// }

// function
