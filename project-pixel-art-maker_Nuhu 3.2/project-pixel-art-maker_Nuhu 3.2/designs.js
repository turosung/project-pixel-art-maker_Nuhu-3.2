// Select color input
const cellColor = document.getElementById('colorPicker');

// Select size input
const tableSize = document.getElementById('sizePicker');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
const submitButton = document.getElementById('submit');
const canvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
tableSize.addEventListener('submit', function (event) {
    event.preventDefault();
    let gridHeight = document.getElementById('inputHeight').value;
    let gridWidth = document.getElementById('inputWidth').value;
    makeGrid(gridHeight, gridWidth);

   //console.log('Grid Height:' + gridHeight + 'Grid Width: ' + gridWidth);
});

// creating table Grid from Height and width values

function makeGrid(gridHeight, gridWidth) {
    canvas.innerHTML = '';
    for(let i = 0; i < gridHeight; i++) {
        let row = document.createElement('tr');
        for (let x = 0; x < gridWidth; x++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }

};

// applying color to pixel art maker 
canvas.addEventListener('click', function (event) {
    if(event.target.style.backgroundColor) {
        event.target.style.backgroundColor = ''; 
    }else {
    event.target.style.backgroundColor = cellColor.value;

    }
    
});
