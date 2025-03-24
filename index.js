console.log("Hello world!");

let gridContainer = document.querySelector(".grid-container");
let btnCreateGrid = document.querySelector(".create-grid");

//btnCreateGrid.addEventListener("click", createGrid);



function createGrid(size) {
  for (let n = 0; n < size; n++) {
    let gridDivX = document.createElement("div");
    gridDivX.classList = `div${n}X`;
    gridDivX.innerHTML = `This is grid X${n + 1}`;
    gridDivX.classList.add("hover-effect")
    gridContainer.appendChild(gridDivX);
    for (let i = 0; i < size; i++) {
      let gridDivY = document.createElement("div");
      gridDivY.classList = `div${i}Y`;
      gridDivY.innerHTML = `This is grid Y${i + 1}`;
      gridDivX.appendChild(gridDivY);
    }
  }
}



createGrid(15);
