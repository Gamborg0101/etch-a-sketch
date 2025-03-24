console.log("Hello world!");

let gridContainer = document.querySelector(".grid-container");
let btnCreateGrid = document.querySelector(".create-grid");
let allDivs = document.querySelectorAll("div");

//btnCreateGrid.addEventListener("click", createGrid);

function createGrid(size) {
  for (let n = 1; n < size + 1; n++) {
    let gridDivX = document.createElement("div");
    gridDivX.classList = `div${n}X`;
    gridDivX.innerHTML = `X${n} `;
    gridDivX.classList.add("hover-effect");
    gridContainer.appendChild(gridDivX);
    for (let i = 1; i < size + 1; i++) {
      let gridDivY = document.createElement("div");
      gridDivY.classList = `X${n}Y${i}`;
      gridDivY.innerHTML = `Y${i}`;
      gridDivX.appendChild(gridDivY);
    }
  }
}
console.log(gridContainer);
allDivs.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    if (e.target !== gridContainer) {
      console.log(e.target);
      e.target.style.backgroundColor = "red";
    }
  });
});

createGrid(9);
