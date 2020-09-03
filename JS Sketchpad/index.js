const init = Math.pow(16, 2);
const container = document.querySelector('#gridContainer');

function createGrid(x) {
    for (let i = 0; i < x; i++) {
        let cell = document.createElement('div');
        cell.classList.add('gridCell');

        container.appendChild(cell);
    }
    container.style.setProperty('--rowNum', Math.sqrt(x));
    container.style.setProperty('--colNum', Math.sqrt(x));

    const gridCell = document.querySelectorAll('.gridCell');

    // To highlight grid cells
    for (let i = 0; i < gridCell.length; i++ ) {
        gridCell[i].onmouseover = function(e) {
            e.target.style.setProperty('--bgColor', 'blue');
        }
}
}

//button to reset canvas

function resetGrid() {
    container.innerHTML = "";
}

const button = document.querySelector('.btn'); 

button.addEventListener('click', function(){
    const userPrompt = prompt(`Select grid size (for a 16x 16 grid - enter 16)`);

    resetGrid();
    createGrid(Math.pow(parseInt(userPrompt), 2));
})

createGrid(init)

