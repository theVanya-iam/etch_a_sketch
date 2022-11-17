const grid_area = document.querySelector(".grid_area"); 
let mouse_in = false;
let size = 16;

function createGrid(size){
    grid_area.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid_area.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;

    for (i=0; i < numDivs; i++){
        const grid_Element = document.createElement("div");
        grid_Element.classList.add("grid_Element");
        grid_area.appendChild(grid_Element);
    }
};

function resetGrid(){
    
}
//function to reset grid to initial look

function updateSize(){
    let input = prompt("What will be size of the board?");
    let message = document.querySelector('#message');
    if (input===""){
        message.innerHTML = "Please provide a number";
    } else if (input <= 0 || input > 100){
        message.innerHTML = "Please provide a number between 1 and 100";
    } else {
        message.innerHTML = "Now you can play!";
        grid_area.innerHTML = "";
        createGrid(input);
    }
//function to change the size of the grid based on users input
}

grid_area.addEventListener("mousedown", () => {
  mouse_in = true;
  this.classList.add('colorSelection'); 
});
grid_area.addEventListener("mouseup", () => {
    mouse_in = false;
});

document.addEventListener("DOMContentLoaded", createGrid(size));