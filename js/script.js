const gameData = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,2],
    [0,0,0,2],
];

function createRandomNumber() {
    let emptyCells = 0;
    gameData.forEach(item => item.forEach((num) => {
        if (num == 0) {
            emptyCells++;
        }
    }));
    let randomNumber = Math.floor(Math.random() * emptyCells);
    gameData.forEach((item, indexX) => item.forEach((num, indexY) => {
        if (randomNumber == 0) {
            gameData[indexX][indexY] = 2;
        }
        if (num == 0) {
            randomNumber--;
        }
    }));

}

function updateGame() {
    const gameBoard = document.querySelector('.game_board'),
          cells = gameBoard.querySelectorAll('.cell');
        
    let count = 0;
    gameData.forEach(item => item.forEach(num => {
        cells[count].textContent = num;
        cells[count].setAttribute('id', `n${num}`);
        count++;
    }));
}

window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowDown") {
        for (let i = gameData.length-1; i > 0; i--) {
            for (let j = 0; j < gameData[0].length; j++) {
                if (gameData[i][j] == gameData[i-1][j] || gameData[i][j] == 0) {
                    gameData[i][j] += gameData[i-1][j];
                    gameData[i-1][j] = 0;
                }

            }
        }
    }
    else if (e.key == "ArrowUp") {
        for(let i = 0; i < gameData.length-1; i++) {
            for (let j = 0; j < gameData[0].length; j++) {
                if (gameData[i][j] == gameData[i+1][j] || gameData[i][j] == 0) {
                    gameData[i][j] += gameData[i+1][j];
                    gameData[i+1][j] = 0;
                }
            }
        }
    }
    createRandomNumber();
    updateGame();
});

function init() {
    createRandomNumber();
    createRandomNumber();
    updateGame();
}
init();