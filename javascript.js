let gridContainer = document.querySelector(".gridContainer");
const container = document.querySelector(".container");
const button = document.querySelector(".newGrid");

button.addEventListener("click", () => {
    let gridSize;

    while (true) {
        gridSize = prompt("Please enter the number of squares per side for a new grid (100 or fewer):");

        if (gridSize === null) {
            return;
        }

        gridSize = parseInt(gridSize);

        if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
            break;
        }
        alert("Invalid input. Please enter a number between 1 and 100.");
    }
    container.removeChild(gridContainer);
    newGrid(gridSize);
});

function newGrid(gridSize) {
    gridContainer = document.createElement("div")
    gridContainer.classList.add("gridContainer");
    container.appendChild(gridContainer);

    for (let i = 0; i < gridSize; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        gridContainer.appendChild(column);

        for (let j = 0; j < gridSize; j++) {
            const row = document.createElement("div");
            row.classList.add("row");
            column.appendChild(row);
        }
    }

    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        row.addEventListener("mouseenter", () => {
            row.setAttribute("style", "background: black;");
        });
    });
}