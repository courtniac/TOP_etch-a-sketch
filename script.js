function generateGrid(rowCount = 4) {
    const container = document.getElementById("container");

    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement("div");
        row.classList = "row";

        for (let i = 0; i < rowCount; i++) {
            let square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener("mouseover", () => {
                square.classList.add("filled");
            });

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

generateGrid();