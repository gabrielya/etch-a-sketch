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
  do {
    let promptR = prompt("Enter how many rows and cols you want.");
  } while (parseInt(promptR) > 100);

  gridItem.forEach((cell) => {
    cell.remove();
  });

  let userRows = parseInt(promptR, 10);

  makeRows(userRows, userRows);

  gridItem = document.querySelectorAll(".grid-item");
  colorTheGrid();
};
