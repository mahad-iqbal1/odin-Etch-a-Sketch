const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    container.appendChild(column);

    for (let j = 0; j < 15; j++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
    }
}