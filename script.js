const canvas = document.getElementById('puzzleCanvas');
const ctx = canvas.getContext('2d');

// Canvas size
canvas.width = 400;
canvas.height = 400;

// Grid settings
const gridSize = 4;
const tileSize = canvas.width / gridSize;

// Initialize grid
let grid = [];
for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
        grid[i][j] = i * gridSize + j + 1; // Sequential numbers
    }
}
grid[gridSize - 1][gridSize - 1] = 0; // Empty space

// Draw grid
function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (grid[i][j] !== 0) {
                ctx.fillStyle = '#3498db';
                ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);

                ctx.fillStyle = '#fff';
                ctx.font = `${tileSize / 2}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(grid[i][j], j * tileSize + tileSize / 2, i * tileSize + tileSize / 2);
            }
        }
    }
}

// Initial render
drawGrid();
