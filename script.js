const sketch_area = document.querySelector(".sketch_area");
console.log({sketch_area});

let multiplier = 16; // the etch-a-sketch grid is 16 x 16;

function createGrid(){
    for (i=0; i < multiplier; i++){
        let block = document.createElement("div");
        block.textContent = "block";
        block.classList.add("block");
        sketch_area.appendChild(block);
    }
    let color_selection;
    // whatever the color user selects in the selection square;
    let mouse_in = false;

    block.addEventListener("mouseenter", () => {
        this.style.color=color_selection;
        mouse_in = true;
    })
};

// 1. Fix the function that creates a grid of 16 x 16.
//      * figure out formulaic approach to making a neatly organized square grid with even blocks
// 2. Explore how to change color using mousemove and eventListeners

// 3. Explore how to adjust size of the grid using a mouse drag and horizontal scrollbar
// 4. Figure out how to change color of the adjustments
// 5. Add feature that allows 3-4 modes for changing colors/shade
//      a) regular: selected color paints blocks
//      b) rainbow: randomized colors paints each block differently
//      c) shading: every block get 10% darker when mousemove occurs
//      d) lighting: every block get 10% brigther when mousemove occurs

createGrid();
