const container = document.querySelector("#container");
let gridSize = 16;

createGrid(gridSize);

document.addEventListener("mouseover", (e) => {
    if (e.target.className === "gridCol") {
        e.target.classList.add("painted");
    }
});

const button = document.querySelector("button");
button.addEventListener("click", getGridSize);


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
    for (let i = 0; i < size; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("gridRow");
    container.appendChild(rowDiv);
    
        for (let i = 0; i < size; i++) {
            let colDiv = document.createElement("div");
            colDiv.classList.add("gridCol");
            colDiv.textContent = ".";
            rowDiv.appendChild(colDiv);
        }
    }
    gridSize = size;
}

function deleteGrid() {
    while (container.firstChild) {
        console.log("ahh");
        container.removeChild(container.firstChild);
    }
}