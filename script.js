const GRID_SIZE = 960;

function generateGrid(rowCount = 4) {
    const container = document.getElementById("container");
    container.replaceChildren();
    container.style.width = `${GRID_SIZE}px`;
    container.style.height = `${GRID_SIZE}px`;

    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement("div");
        row.classList = "row";

        for (let i = 0; i < rowCount; i++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.height = `${GRID_SIZE/rowCount}px`;

            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = `rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()})`
            });

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

function getRandomRGBValue() {
    return Math.random() * 257;
}

function showPrompt() {
    const numSquares = prompt("How many squares per side of the grid? Max: 100");

    if (numSquares > 100) {
        return;
    }
    
    generateGrid(numSquares);
}

generateGrid();