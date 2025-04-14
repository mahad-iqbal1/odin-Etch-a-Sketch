let gridContainer = document.querySelector(".gridContainer");
const container = document.querySelector(".container");

for (let i = 0; i < 100; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    gridContainer.appendChild(column);

    for (let j = 0; j < 100; j++) {
        const row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
    }
}

const button = document.querySelector(".newGrid");
button.addEventListener("click", () => {
    const gridSize = prompt("Please enter number of squares per side for a new grid");

    container.removeChild(gridContainer);
    newGrid(gridSize);
})

const rows = document.querySelectorAll(".row");
rows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
        row.setAttribute("style", "background: black;");
    });
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
}