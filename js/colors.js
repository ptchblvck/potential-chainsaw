// tic tac toe constants

const ticTacToeFieldArray = document.querySelectorAll("div.field");
const fields = document.getElementById("fields");
const root = document.querySelector(":root");
const colors = document.querySelectorAll(".picking-color > div");
const gameBoard = document.querySelector("body > main > .container");
const preGameContainer = document.querySelector("body > main > .pre-game");
const dialogOptionYesButton = document.querySelector(
  "#dialog-reset-board > div > div > button:nth-child(1)"
);
const dialogOptionNoButton = document.querySelector(
  "#dialog-reset-board > div > div > button:nth-child(2)"
);

// variables for colors

let pickedColor;
let changedColor;
let colorValue = [];

// changing color

function getColor() {
  let rootStyle = getComputedStyle(root);
  console.log(
    `The value of ${pickedColor} is: ` +
      rootStyle.getPropertyValue("--color-player")
  );
}

function changePlayerColor(color) {
  root.style.setProperty("--color-player", color);
}

function changeNpcColor(color) {
  root.style.setProperty("--color-npc", color);
}

colors.forEach((colorPosition) =>
  colorPosition.addEventListener("click", (c) => {
    pickedColor = c.currentTarget.id.slice(5) - 1;
    console.log(getAllColorValues(pickedColor));
    changePlayerColor(getAllColorValues(pickedColor));
    colorPicker();
  })
);

function getAllColorValues(colorPosition) {
  for (const element of colors) {
    colorValue.push(
      window
        .getComputedStyle(element, null)
        .getPropertyValue("background-color")
    );
  }
  return colorValue[colorPosition];
}

function colorPicker() {
  for (let i = 0, j = 7; i < 8, j >= 0; i++, j--) {
    switch (pickedColor) {
      case i:
        changeNpcColor(getAllColorValues(j));
        break;
    }
  }
}

// mouse movement detection

fields.onmousemove = (e) => {
  for (const field of document.getElementsByClassName("field")) {
    const rect = field.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    field.style.setProperty("--mouse-x", `${x}px`);
    field.style.setProperty("--mouse-y", `${y}px`);
  }
};
