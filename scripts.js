const container = document.getElementById("container");

//container.style.setProperty("--grid-rows", rows);
//container.style.setProperty("--grid-cols", cols);

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

makeRows(16, 16);

let gridItem = document.querySelectorAll(".grid-item");

function colorTheGrid() {
  gridItem.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.background = "purple";
    });
  });
}

colorTheGrid();

const resetButton = document.querySelector("#reset-button");

resetButton.onclick = () => {
  let promptR = prompt("Enter how many rows and cols you want.");

  let userRows = parseInt(promptR, 10);

  while (!isNumeric(promptR) || userRows > 100) {
    promptR = prompt("Please enter a number <= to 100.");
    userRows = parseInt(promptR, 10);
  }

  gridItem.forEach((cell) => {
    cell.remove();
  });

  makeRows(userRows, userRows);

  gridItem = document.querySelectorAll(".grid-item");
  colorTheGrid();
};
