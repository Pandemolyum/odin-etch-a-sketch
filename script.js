let gridSize = 16;
let isRGB = false;
let rgbQueue = [];
const container = document.querySelector("#container");
const gridButton = document.querySelector("#grid");
const rgbButton = document.querySelector("#rgb");

gridButton.addEventListener("click", getGridSize);

rgbButton.addEventListener("click", () => {
    if (isRGB) {
        isRGB = false;
        rgbButton.style.backgroundColor = "#452B0C";
    } else {
        isRGB = true;
        rgbButton.style.backgroundColor = "#98601B";
    }
});

document.addEventListener("mouseover", (e) => {
    if (e.target.className === "gridCol") {
        if (isRGB) {
            const red = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;

            rgbQueue.forEach((elem) => {elem.style.opacity = elem.style.opacity - 0.1;})
            rgbQueue.push(e.target);

            if (rgbQueue.length > 10) {
                rgbQueue.shift();
            }
        } else {
            e.target.classList.add("painted");
        }
    }
});

createGrid(gridSize);


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
            colDiv.style.opacity = 1;
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