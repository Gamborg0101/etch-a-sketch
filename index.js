let gridContainer = document.querySelector(".grid-container");
let btnCreateGrid = document.querySelector(".create-grid");
let btnResetGrid = document.querySelector(".reset-grid");

btnCreateGrid.addEventListener("click", () => {
  let xValue = parseInt(prompt("How many pixels width would you like?"));
  let yValue = parseInt(prompt("How many pixels height would you like?"));
  createGrid(xValue, yValue);
});

btnResetGrid.addEventListener("click", () => {
  gridContainer.innerHTML = "";
});

function createGrid(xValue, yValue) {
  if (typeof xValue !== "number" || typeof yValue !== "number") {
    return "You need to enter a number";
  }

  if (xValue > 100 || yValue > 100) {
    let warningDiv = document.createElement("div");
    warningDiv.classList.add("warningDiv");
    warningDiv.innerText = "There is a maximum of 100x100 grid";
    gridContainer.appendChild(warningDiv);

    return;
  }

  gridContainer.innerHTML = ""; //Reset values in case user makes secound grid.

  for (let n = 1; n < xValue + 1; n++) {
    let gridDivX = document.createElement("div");
    gridDivX.classList = `div${n}X`;
    //Learning: Should not x add value. It has to be invisible.
    gridContainer.appendChild(gridDivX);

    for (let i = 1; i < yValue + 1; i++) {
      let gridDivY = document.createElement("div");
      gridDivY.classList = `X${n}Y${i}`;
      gridDivY.innerHTML = ``;
      gridDivY.style.width = "15px";
      gridDivY.style.height = "15px";
      gridDivY.style.border = "1px solid black";

      gridDivY.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
      });

      gridDivX.appendChild(gridDivY);
    }
  }
}

createGrid();
//Alternativ approach: mouseover could apply a new class instead, and then have a css rule for that.
//Does not sound like that might be very effective, but it is an alternative approach.
