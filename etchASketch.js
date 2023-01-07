// Set-up grid, buttons and base values
const grid = document.getElementById("grid");
const clear = document.getElementById("clear");
const colorSelector = document.getElementById('colorSelector')
const randomMode = document.getElementById('randomMode')
const erase = document.getElementById('erase')
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)
mode = null;

// change the color of a cell when the mouse is hovering over it
grid.addEventListener("mouseover", function(event) {
    if (event.target.nodeName === "TD") {
      event.target.style.backgroundColor = rgbaColor;
    }
});

// Eraser button erases by making background values white
erase.addEventListener("click", function() {
    mode = 1;
    grid.addEventListener("mouseover", function(event) {
        if (event.target.nodeName === "TD" && mode === 1) {
        rgbaColor = "white"
        event.target.style.backgroundColor = rgbaColor;
        }
    });
    });

// Random color mode - picks one of 8 random colors whenever a field is highlighted
function random () {
    randomMode.addEventListener("click", function() {
        mode = 2;
        grid.addEventListener("mouseover", function(event) {
            if (event.target.nodeName === "TD" && mode === 2) {
                let randNum = Math.floor(Math.random() * 7);
                if (randNum === 0) {
                    colorLabel.style.backgroundColor = "blue";
                    grid.addEventListener("mouseover", function(event) {
                        if (event.target.nodeName === "TD" && mode === 2) {
                        rgbaColor = "blue";
                        event.target.style.backgroundColor = rgbaColor;
                        }
                    });
                }
                else if (randNum === 1) {
                    colorLabel.style.backgroundColor = "red";
                    grid.addEventListener("mouseover", function(event) {
                        if (event.target.nodeName === "TD" && mode === 2) {
                            rgbaColor = "red";
                            event.target.style.backgroundColor = rgbaColor;
                        }
                    });
                }
                else if (randNum === 2) {
                    colorLabel.style.backgroundColor = "yellow";
                    grid.addEventListener("mouseover", function(event) {
                        if (event.target.nodeName === "TD" && mode === 2) {
                            rgbaColor = "yellow";
                            event.target.style.backgroundColor = rgbaColor;
                        }
                    });
                }
                else if (randNum === 3) {
                    colorLabel.style.backgroundColor = "green";
                    grid.addEventListener("mouseover", function(event) {
                        if (event.target.nodeName === "TD" && mode === 2) {
                            rgbaColor = "green";
                            event.target.style.backgroundColor = rgbaColor;
                        }
                    });
                }
                else if (randNum === 4) {
                    colorLabel.style.backgroundColor = "purple";
                    grid.addEventListener("mouseover", function(event) {
                        if (event.target.nodeName === "TD" && mode === 2) {
                            rgbaColor = "purple";
                            event.target.style.backgroundColor = rgbaColor;
                        }
                    });
                }
                else if (randNum === 5) {
                    colorLabel.style.backgroundColor = "brown";
                    grid.addEventListener("mouseover", function(event) {
                        if (event.target.nodeName === "TD" && mode === 2) {
                            rgbaColor = "brown";
                            event.target.style.backgroundColor = rgbaColor;
                        }
                    });
                }
                else if (randNum === 6) {
                    colorLabel.style.backgroundColor = "gold";
                    grid.addEventListener("mouseover", function(event) {
                        if (event.target.nodeName === "TD" && mode === 2) {
                            rgbaColor = "gold";
                            event.target.style.backgroundColor = rgbaColor;
                        }
                    });
                }
                else {
                    colorLabel.style.backgroundColor = "silver";
                    grid.addEventListener("mouseover", function(event) {
                        if (event.target.nodeName === "TD" && mode === 2) {
                            rgbaColor = "silver";
                            event.target.style.backgroundColor = rgbaColor;
                        }
                    });
                }
            }
        });
    });
}
random();

// clear the grid when the clear button is clicked
clear.addEventListener("click", function() {
var cells = grid.getElementsByTagName("td");
for (var cell of cells) {
    cell.style.backgroundColor = "white";
    }
});

// create the etch-a-sketch grid
var slider = document.getElementById("myRange");
rows = slider.value;
cols = slider.value;
for (let i = 0; i < rows; i++) {
  row = document.createElement("tr");
  for (let j = 0; j < cols; j++) {
    cell = document.createElement("td");
    row.appendChild(cell);
  }
  grid.appendChild(row);
}

// Color Selector 
var colorBlock = document.getElementById('color-block');
var ctx1 = colorBlock.getContext('2d');
var width1 = colorBlock.width;
var height1 = colorBlock.height;

var colorStrip = document.getElementById('color-strip');
var ctx2 = colorStrip.getContext('2d');
var width2 = colorStrip.width;
var height2 = colorStrip.height;

var colorLabel = document.getElementById('color-label');
document.getElementById("color-input").checked = false;


var x = 0;
var y = 0;
var drag = false;
var rgbaColor = 'rgba(255,0,0,1)';

ctx1.rect(0, 0, width1, height1);
fillGradient();

ctx2.rect(0, 0, width2, height2);
var grd1 = ctx2.createLinearGradient(0, 0, 0, height1);
grd1.addColorStop(0, 'rgba(255, 0, 0, 1)');
grd1.addColorStop(0.17, 'rgba(255, 255, 0, 1)');
grd1.addColorStop(0.34, 'rgba(0, 255, 0, 1)');
grd1.addColorStop(0.51, 'rgba(0, 255, 255, 1)');
grd1.addColorStop(0.68, 'rgba(0, 0, 255, 1)');
grd1.addColorStop(0.85, 'rgba(255, 0, 255, 1)');
grd1.addColorStop(1, 'rgba(255, 0, 0, 1)');
ctx2.fillStyle = grd1;
ctx2.fill();

function click(e) {
  document.getElementById("color-input").checked = true;
  x = e.offsetX;
  y = e.offsetY;
  mode = 3;
  var imageData = ctx2.getImageData(x, y, 1, 1).data;
  rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
  fillGradient();
  grid.addEventListener("mouseover", function(event) {
    if (event.target.nodeName === "TD" && mode === 3) {
      event.target.style.backgroundColor = rgbaColor;
    }
});
}

// Grid Size Slider stuff
const gridSize = document.getElementById("gridsize");
gridSize.innerHTML = slider.value + "x" + slider.value;

slider.oninput = function() {
    gridSize.innerHTML = slider.value + "x" + slider.value;
    rows = slider.value;
    cols = slider.value;
    grid.innerHTML = null;
    for (let i = 0; i < rows; i++) {
    row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
        cell = document.createElement("td");
        row.appendChild(cell);
    }
    grid.appendChild(row);
    }
}

function fillGradient() {
  ctx1.fillStyle = rgbaColor;
  ctx1.fillRect(0, 0, width1, height1);

  var grdWhite = ctx2.createLinearGradient(0, 0, width1, 0);
  grdWhite.addColorStop(0, 'rgba(255,255,255,1)');
  grdWhite.addColorStop(1, 'rgba(255,255,255,0)');
  ctx1.fillStyle = grdWhite;
  ctx1.fillRect(0, 0, width1, height1);

  var grdBlack = ctx2.createLinearGradient(0, 0, 0, height1);
  grdBlack.addColorStop(0, 'rgba(0,0,0,0)');
  grdBlack.addColorStop(1, 'rgba(0,0,0,1)');
  ctx1.fillStyle = grdBlack;
  ctx1.fillRect(0, 0, width1, height1);
}

function mousedown(e) {
  drag = true;
  changeColor(e);
}

function mousemove(e) {
  if (drag) {
    changeColor(e);
  }
}

function mouseup(e) {
  drag = false;
}

function changeColor(e) {
  x = e.offsetX;
  y = e.offsetY;
  var imageData = ctx1.getImageData(x, y, 1, 1).data;
  rgbaColor = 'rgba(' + imageData[0] + ',' + imageData[1] + ',' + imageData[2] + ',1)';
  colorLabel.style.backgroundColor = rgbaColor;
}

colorStrip.addEventListener("click", click, false);
colorBlock.addEventListener("mousedown", mousedown, false);
colorBlock.addEventListener("mouseup", mouseup, false);
colorBlock.addEventListener("mousemove", mousemove, false);