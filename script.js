const puzzleContainer = document.getElementById('puzzle');

// Initialize the puzzle tiles
const tiles = [...Array(15).keys()].map(x => x + 1); // Numbers 1 to 15
tiles.push(null); // Add the empty tile

// Shuffle the tiles
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(tiles);

// Render the puzzle
function renderPuzzle() {
    puzzleContainer.innerHTML = '';
    tiles.forEach((tile, index) => {
        const tileElement = document.createElement('div');
        tileElement.classList.add('tile');
        if (tile === null) {
            tileElement.classList.add('empty');
        } else {
            tileElement.textContent = tile;
            tileElement.addEventListener('click', () => moveTile(index));
        }
        puzzleContainer.appendChild(tileElement);
    });
}

// Move a tile
function moveTile(index) {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [
        emptyIndex - 4, // Up
        emptyIndex + 4, // Down
        emptyIndex - 1, // Left
        emptyIndex + 1  // Right
    ];

    if (validMoves.includes(index) && 
        (Math.abs(emptyIndex % 4 - index % 4) === 1 || Math.abs(emptyIndex - index) === 4)) {
        [tiles[emptyIndex], tiles[index]] = [tiles[index], tiles[emptyIndex]];
        renderPuzzle();
    }
}

renderPuzzle();
