let grid = document.querySelector("#grid");
let clearBtn = document.querySelector("#clear-btn");
let changeSizeBtn = document.querySelector("#change-size-btn");


clearBtn.addEventListener('click', clearGrid);
changeSizeBtn.addEventListener('click', changeGridSize);

let pixels = [];
let pixelColor = "black";

let coloredPixels = [];


function addPixel(size){
    let pixel = document.createElement("div");
    pixel.style.width = `${size}%`;
    pixel.style.height = `${size}%`;
    pixel.classList.add("pixel")
    
    grid.appendChild(pixel);
}

function colorPixel(pixel){
    pixel.style.backgroundColor = `${pixelColor}`;
    coloredPixels.push(pixel);
}

function setGrid(nb){
    //add pixels to the grid
    for(let i = 0; i < nb * nb; i++){
        addPixel(100 / nb);
    }

    //add event listener for each pixel
    pixels = document.querySelectorAll('.pixel');
    pixels.forEach(
        function(pixel){
    
            pixel.addEventListener('mouseover', 
                function(){
                    colorPixel(pixel);
                }
            );
        }
    );
}



function getSize(){
    let size = prompt("Enter the size of the grid (between 1 and 100");
    return Number(size);
}

function clearGrid(){
    if (coloredPixels.length > 0){
        coloredPixels.forEach(
            function(pixel){
                pixel.style.backgroundColor="white";
            }
        );
    }
}

function deleteGrid(){
    grid.innerHTML="";
    pixels = [];
    coloredPixels = [];
}

function changeGridSize(){
    deleteGrid();
    let size = getSize();
    setGrid(size);
}


setGrid(16);
