const gameBoard = document.getElementById('gameBoard');
const images = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'E', 'F', 'G', 'H'];
let flipped = [];
let matchedPairs = 0;

// Shuffle images
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize game board
function initializeBoard() {
    const shuffledImages = shuffle(images);
    gameBoard.innerHTML = '';
    shuffledImages.forEach(img => {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.image = img;
        gameBoard.appendChild(tile);
    });
}

// Check for matches
function checkMatch() {
    if (flipped.length === 2) {
        const [first, second] = flipped;
        if (first.dataset.image === second.dataset.image) {
            first.classList.add('matched');
            second.classList.add('matched');
            matchedPairs++;
            flipped = [];
            if (matchedPairs === images.length / 2) {
                alert('You won!');
            }
        } else {
            setTimeout(() => {
                first.classList.remove('flipped');
                second.classList.remove('flipped');
                flipped = [];
            }, 1000);
        }
    }
}

// Handle tile clicks
gameBoard.addEventListener('click', (e) => {
    const tile = e.target;
    if (tile.classList.contains('tile') && !tile.classList.contains('matched') && flipped.length < 2) {
        tile.classList.add('flipped');
        flipped.push(tile);
        checkMatch();
    }
});

// Start the game
initializeBoard();
