const container = document.querySelector(".container");
const setGridBtn = document.querySelector(".set-grid__btn");
let grid = 64;
const totalCells = grid * grid;

function createGrid(cells) {
  for (let i = 0; i < cells; i++) {
    const divEl = document.createElement("div");
    divEl.className = "cell";
    container.appendChild(divEl);
  }
  container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
}

function removeGrid() {
  for (let i = 0; i < totalCells; i++) {
    const cell = document.querySelector(".cell");
    container.removeChild(cell);
  }
}

function hoverEffect() {
  const cells = document.querySelectorAll(".cell");
  for (const cell of cells) {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "#E7F6F2";
    });
  }
}

function setGrid() {
  setGridBtn.addEventListener("click", () => {
    removeGrid();
    grid = prompt("Give me your best number between 0 - 100");
    const total = grid * grid;
    createGrid(total);
    hoverEffect();
  });
}

function main() {
  setGrid();
  createGrid(totalCells);
  hoverEffect();
}

main();
