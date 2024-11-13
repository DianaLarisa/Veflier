let board = ["", "", "", "", "", "", "", "", ""]; // 3x3 board array
let currentPlayer = "X"; // Start with player "X"
let isGameActive = true; // Control game state

const statusDisplay = document.querySelector('.status'); // Status for win or draw
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('.restart');

// Win conditions for Tic-Tac-Toe
const winConditions = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal
    [2, 4, 6]  // Anti-diagonal
];

// Function to handle cell click
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    // If cell is already filled or the game is not active, return
    if (board[clickedCellIndex] !== "" || !isGameActive) {
        return;
    }

    // Update the board and UI
    board[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;

    // Check if someone has won
    checkResult();
}

// Check for a win or a draw
function checkResult() {
    let roundWon = false;

    // Check all the win conditions
    for (let i = 0; i < winConditions.length; i++) {
        const winCondition = winConditions[i];
        const a = board[winCondition[0]];
        const b = board[winCondition[1]];
        const c = board[winCondition[2]];

        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerHTML = `Player ${currentPlayer} has won!`;
        isGameActive = false;
        return;
    }

    // Check if it's a draw
    const roundDraw = !board.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = "It's a draw!";
        isGameActive = false;
        return;
    }

    // Switch the player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = `Player ${currentPlayer}'s turn`;
}

// Restart the game
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""]; // Reset the board
    isGameActive = true; // Activate the game again
    currentPlayer = "X"; // X starts
    statusDisplay.innerHTML = `Player ${currentPlayer}'s turn`; // Reset status
    cells.forEach(cell => cell.innerHTML = ""); // Clear the UI
}

// Add click event to all cells
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

// Add click event to restart button
restartButton.addEventListener('click', restartGame);

// Initial status display
statusDisplay.innerHTML = `Player ${currentPlayer}'s turn`;