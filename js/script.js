let canvas = document.querySelector(".canvas");
let submitButton = document.querySelector("#submitButton");

function makeGrid() {
  // getting the value of height, width and color
  // converting girdHeight and gridWidth to integers
  let gridHeight = document.getElementById("gridHeight").value * 1;
  let gridWidth = document.getElementById("gridWidth").value * 1;
  let gridColor = document.getElementById("gridColor").value;
  // clearing the Canvas

  // appending tr and td to the canvas table
  for (let i = 0; i < gridHeight; i++) {
    let tableRow = document.createElement("tr");
    canvas.appendChild(tableRow);
    for (let i = 0; i < gridWidth; i++) {
      let tableCell = document.createElement("td");
      tableRow.appendChild(tableCell);
    }
  }
  // on hover add or remove the color

}

// add event listener on submit button
// and pass it the makeGrid function
submitButton.addEventListener("click", function() {
  makeGrid();
})

// do not forget the prevent default!!!!
