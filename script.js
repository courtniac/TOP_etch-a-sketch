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
                if (square.style.backgroundColor) {
                    square.style.opacity = `${getOpacity(parseFloat(square.style.opacity))}`;
                } else {
                    square.style.backgroundColor = `rgb(${getRandomRGBValue()}, ${getRandomRGBValue()}, ${getRandomRGBValue()})`;
                    square.style.opacity = "0.1";
                }
            });

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}

function getRandomRGBValue() {
    return Math.random() * 257;
}

function getOpacity(currOpacity) {
    return currOpacity === 1 ? 1 : currOpacity + 0.1;
}

function showPrompt() {
    const numSquares = prompt("How many squares per side of the grid? Max: 100");

    if (numSquares > 100) {
        return;
    }
    
    generateGrid(numSquares);
}

generateGrid();