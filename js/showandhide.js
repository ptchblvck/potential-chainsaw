function hidePreloadGameButton() {
  preGameContainer.style.display = "none";
  gameBoard.style.display = "flex";
}
function showPreloadGameButton() {
  preGameContainer.style.display = "grid";
  gameBoard.style.display = "none";
}
function hideResetButton() {
  gameResetButton.style.display = "none";
}
function showResetButton() {
  gameResetButton.style.display = "block";
}
function emptyAllPlayFields() {
  playFields.forEach((e) => {
    e.children[1].innerHTML = "";
  });
}
