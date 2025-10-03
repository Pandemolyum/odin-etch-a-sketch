const container = document.querySelector("#container");
const GRID_SIZE = 16;


for (let i = 0; i < GRID_SIZE; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("gridRow");
    container.appendChild(rowDiv);
    
    for (let i = 0; i < GRID_SIZE; i++) {
        let colDiv = document.createElement("div");
        colDiv.classList.add("gridCol");
        colDiv.textContent = "lorem ipsum";
        rowDiv.appendChild(colDiv);
    }
}

document.addEventListener("mouseover", (e) => {
    if (e.target.className === "gridCol") {
        e.target.classList.add("painted");
    }
});