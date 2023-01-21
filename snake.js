
// Доска
// Размеры блоков и доски
let blockSize = 25; 
let rows = 20;
let cols = 20;
let board;
let context;


// Голова змеи
// Змея стартует с координат (5,5)
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;


// Скорость змеи
let VelocityX = 0
let VelocityY = 0

let snakeBody = [];

// Еда
let foodX;
let foodY;


// Проиграл

let gameOver = false;



window.onload = function() {
    board = document.getElementById('board');

    // Делаем "площадь" доски
    board.height = rows * blockSize;
    board.width = cols * blockSize;

    // Рисование на доске 
    context = board.getContext('2d');

    placeFood();
    document.addEventListener('keyup', changeDirection);
    // update();
    // Обновляется доска
    setInterval(update, 1000/10); // Каждые 100 миллисекунд обновляется
}


// Для обновления доски
function update() {
    // Если проиграл - прекратится рисоваться
    if (gameOver) {
        return;
    }

    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);
    
    // Заливка еды
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);

    // Цвет змеи, её заливка
    context.fillStyle = 'lime';

    if (snakeX == foodX && snakeY == foodY) {
        // Увеличивается змея на месте еды
        snakeBody.push([foodX, foodY])
        placeFood();
    }

    // Чтобы добавлялось к концу телу, а не просто оставалось на поверхности часть змеи
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];        
    }

    if (snakeBody.length) {
        snakeBody[0] =  [snakeX, snakeY]
    }  

    // Для роста змейки || Рисуется тело змеи  
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    // Скорость и положение меняется
    snakeX+= VelocityX * blockSize;
    snakeY+= VelocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    // Условия прекращения игры
    // Если выходит за рамки змея, то проиграл
    if (snakeX < 0 || snakeX > cols.blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert('Проиграл');
    }
    // Если врезаться в тело
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakyY == snakeBody[i][1]) {
            gameOver = true;
            alert('Проиграл');
        }
    }

}

// Меняет направление движения змеи
function changeDirection(e) {
    if (e.code == 'ArrowUp' && VelocityY != 1) {
        VelocityX = 0;
        VelocityY = -1;
    } else if (e.code == 'ArrowDown' && VelocityY != -1) {
        VelocityX = 0;
        VelocityY = 1;
    } else if (e.code == 'ArrowLeft' && VelocityX != 1) {
        VelocityX = -1;
        VelocityY = 0;
    } else if (e.code == 'ArrowRight' && VelocityX != -1) {
        VelocityX = 1;
        VelocityY = 0;
    }
}






// Размещение еды случайным образом
function placeFood() {
    foodX = Math.floor(Math.random() * cols) * blockSize
    foodY = Math.floor(Math.random() * cols) * blockSize
    // Случайное число от 0-1 * cols -> (0-19.9999) -> (0-19) * 25
    
}



