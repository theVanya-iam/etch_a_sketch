const grid_area = document.querySelector(".grid_area");
let brush_on = false;
let size = 16;
let color = 'black';

function createGrid(size){
    grid_area.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid_area.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;

    for (i=0; i < numDivs; i++){
        let grid_Element = document.createElement("div");
        grid_Element.classList.add("grid_Element");
        grid_area.appendChild(grid_Element);
        setColor();
        grid_Element.addEventListener("mousedown", () => {
            brush_on = true;
            colorDiv();
        });
        grid_Element.addEventListener("mouseup", () => {
            brush_on = false;
        });
        grid_Element.addEventListener("mouseover", (e) => {
            if (brush_on === true){
                colorDiv();
            }
        });
    }
};

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
}

function colorDiv(){
    if (color == "random"){
        event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        event.target.style.backgroundColor = "black";
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetGrid(){
    grid_area.innerHTML = "";
    createGrid(size);
}

document.addEventListener("DOMContentLoaded", createGrid(size));