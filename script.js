const grid_area = document.querySelector(".grid_area");

let multiplier = 20; // the etch-a-sketch grid is 16 x 16;

function createGrid(multiplier){
    
    grid_area.style.gridTemplateColumns = `repeat(${multiplier}, 1fr)`;
    grid_area.style.gridTemplateRows = `repeat(${multiplier}, 1fr)`;
    // the above two lines determine the formulaic approach to making a grid
    for (i=0; i < (multiplier * multiplier); i++){
        const grid_Element = document.createElement("div");
        grid_Element.classList.add("grid_Element");
        grid_area.appendChild(grid_Element);
    }

    let color_selection = "#00FF00";
    // whatever the color user selects in the selection square;
    
    let mouse_in = false;
    document.addEventListener("click", () => {
        if (mouse_in === true){
            this.style.backroundColor = 'red';
        }
    })
};


// 2. Explore how to change color using mousemove and eventListeners

// 3. Explore how to adjust size of the grid using a mouse drag and horizontal scrollbar
// 4. Figure out how to change color of the adjustments
// 5. Add feature that allows 3-4 modes for changing colors/shade
//      a) regular: selected color paints blocks
//      b) rainbow: randomized colors paints each block differently
//      c) shading: every block get 10% darker when mousemove occurs
//      d) lighting: every block get 10% brigther when mousemove occurs

window.onload = () => {
    createGrid(multiplier);
  }