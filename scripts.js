const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);

let gridItem = document.querySelectorAll(".grid-item");

gridItem.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.background="purple";
    });
});

const resetButton = document.getElementById("reset-button");

const promptv = alert(prompt("Enter how many rows and colums you want.",
    "rows: ", "cols: "));


resetButton.onclick = () => gridItem.forEach((cell) => {
        cell.style.background="none";
});
