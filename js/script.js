const gameData = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

function createRandomNumber() {
    let emptyCells = [];
    gameData.forEach((item, indexX) => item.forEach((num, indexY) => {
        if (num == 0) {
            emptyCells.push({x: indexX, y: indexY});
        }
    }));
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const randomNumber = (Math.random() > 0.4) ? 2 : 4;
    gameData[emptyCells[randomIndex].x][emptyCells[randomIndex].y] = randomNumber;

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
    let gameOver = true;
    if (e.key == "ArrowDown") {
        for (let i = gameData.length-1; i > 0; i--) {
            for (let j = 0; j < gameData[0].length; j++) {
                if (gameData[i][j] == gameData[i-1][j] || gameData[i][j] == 0) {
                    gameData[i][j] += gameData[i-1][j];
                    gameData[i-1][j] = 0;
                    gameOver = false;
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
                    gameOver = false;
                }
            }
        }
    }
    else if (e.key == "ArrowLeft") {
        for (let i = 0; i < gameData.length-1; i++) {
            for (let j = 0; j < gameData.length; j++) {
                if (gameData[j][i] == gameData[j][i+1] || gameData[j][i] == 0) {
                    gameData[j][i] += gameData[j][i+1];
                    gameData[j][i+1] = 0;
                    gameOver = false;
                }
            }
        } 
    }
    else if (e.key == "ArrowRight") {
        for (let i = gameData.length; i > 0; i--) {
            for (let j = 0; j < gameData.length; j++) {
                if (gameData[j][i] == gameData[j][i-1] || gameData[j][i] == 0) {
                    gameData[j][i] += gameData[j][i-1];
                    gameData[j][i-1] = 0;
                    gameOver = false;
                }
            }
        }
    }

    if (gameOver) {
        console.log("game over");
        return;
    }
    createRandomNumber();
    updateGame();
});

function init() {
    createRandomNumber();
    createRandomNumber();
    updateGame();
}
function showArray() {
    let output = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            output += gameData[i][j];
        }
        output += '\n';
    }
    console.log(output);
}
init();