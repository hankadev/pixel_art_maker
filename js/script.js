(function() {
  "use strict";
  let canvas = document.querySelector(".canvas");
  let submitButton = document.querySelector("#submitButton");

  function makeGrid() {
    /**
     * getting the value of height, width and color
     * converting girdHeight and gridWidth to integers
     */
    let gridHeight = document.getElementById("gridHeight").value * 1;
    let gridWidth = document.getElementById("gridWidth").value * 1;
    /**
     * appending tr and td to the canvas table
     */
    for (let i = 0; i < gridHeight; i++) {
      let tableRow = document.createElement("tr");
      canvas.appendChild(tableRow);
      for (let i = 0; i < gridWidth; i++) {
        let tableCell = document.createElement("td");
        tableRow.appendChild(tableCell);
      }
    }
  }

  function clearCanvas() {
    let rowsToRemove = document.querySelectorAll("tr");
    if (rowsToRemove.length > 1) {
      for (let i = 0; i < rowsToRemove.length; i++) {
        rowsToRemove[i].remove();
      }
    }
  }
  /**
   *  make grid automatically when DOM is loaded
   */
  document.addEventListener("DOMContentLoaded", makeGrid());
  /**
   * add event listener on submit button
   * and pass it the clearGrid and makeGrid functions
   */
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    clearCanvas();
    makeGrid();
  });
  /**
   * on click add or remove the bgcolor
   */
  canvas.addEventListener("click", function(event) {
    let gridColor = document.getElementById("gridColor").value;
    let cell = event.target;
    if (cell.hasAttribute("style")) {
      cell.removeAttribute("style");
    } else {
      cell.style.backgroundColor = gridColor;
    }
  });
}());
