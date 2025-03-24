console.log("Hello world!");

let gridContainer = document.querySelector(".grid-container");
let btnCreateGrid = document.querySelector(".create-grid");
let allDivs = document.querySelectorAll("div");

//btnCreateGrid.addEventListener("click", createGrid);

function createGrid() {
  //let xValue = parseInt(prompt("How many pixels width would you like?"));
  //let yValue = parseInt(prompt("How many pixels height would you like?"));

  console.log(xValue);
  console.log(typeof xValue == "number");

  if (typeof xValue !== "number" || typeof yValue !== "number") {
    return "You need to enter a number";
  }

  for (let n = 1; n < xValue + 1; n++) {
    let gridDivX = document.createElement("div");
    gridDivX.classList = `div${n}X`;
    gridDivX.innerHTML = `X${n} `;
    gridDivX.classList.add("hover-effect");
    gridContainer.appendChild(gridDivX);
    for (let i = 1; i < yValue + 1; i++) {
      let gridDivY = document.createElement("div");
      gridDivY.classList = `X${n}Y${i}`;
      gridDivY.innerHTML = `Y${i}`;
      gridDivX.appendChild(gridDivY);
    }
  }
}

allDivs.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    if (e.target !== gridContainer) {
      console.log(e.target);
      e.target.style.backgroundColor = "red";
    }
  });
});

createGrid();
//Alternativ approach: mouseover could apply a new class instead, and then have a css rule for that.
//Does not sound like that might be very effective, but it is an alternative approach.
