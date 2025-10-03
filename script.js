let gridSize = 16;
const container = document.querySelector("#container");

createGrid(gridSize);

document.addEventListener("mouseover", (e) => {
    if (e.target.className === "gridCol") {
        e.target.classList.add("painted");
    }
});

const button = document.querySelector("button");
button.addEventListener("click", getGridSize);


// ========== FUNCTIONS ==========
function getGridSize() {
    const userInput = prompt("Enter the new grid size (max 100).");    
    setGridSize(parseInt(userInput));
}

function setGridSize(size) {
    if (size !== NaN && size <= 100 && size > 0) {
        deleteGrid();
        createGrid(size);
    } else {
        alert("The grid has not been reset. Please enter a valid number.");
    }
}

function createGrid(size) {
    const containerMaxSize = Math.min(window.innerHeight, window.innerWidth);
    const containerPadding = parseInt(window.getComputedStyle(container).getPropertyValue('padding').slice(0, 2));
    const containerMargin = 384;
    const containerSize = containerMaxSize - containerMargin;
    const cellMaxSize = (containerSize - 2 * containerPadding) / size;

    container.style.width = containerSize + "px";
    container.style.height = containerSize + "px";

    for (let i = 0; i < size; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("gridRow");
    container.appendChild(rowDiv);
    
        for (let i = 0; i < size; i++) {
            let colDiv = document.createElement("div");
            colDiv.classList.add("gridCol");
            colDiv.style.width = cellMaxSize + "px";
            colDiv.style.height = cellMaxSize + "px";
            rowDiv.appendChild(colDiv);
        }
    }
    gridSize = size;
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}