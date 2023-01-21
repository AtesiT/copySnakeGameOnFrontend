
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



// Еда
let foodX;
let foodY;






window.onload = function() {
    board = document.getElementById('board');
    // Делаем "площадь" доски
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext('2d');
    // Рисование на доске (сверху)

    placeFood();
    document.addEventListener('keyup', changeDirection);
    // update();
    // Обновляется доска
    setInterval(update, 1000/10); // Каждые 100 миллисекунд обновляется
}


// Для обновления доски
function update() {
    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height);
    // Цвет змеи, её заливка
    context.fillStyle = 'lime';
    // Скорость увеличивается и положение меняется
    snakeX+= VelocityX;
    snakeY+= VelocityY;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    // Заливка еды
    context.fillStyle = 'red';
    context.fillRect(foodX, foodY, blockSize, blockSize);
}

// Меняет направление движения змеи
function changeDirection(e) {
    if (e.code == 'ArrowUp') {
        VelocityX = 0;
        VelocityY = -1;
    } else if (e.code == 'ArrowDown') {
        VelocityX = 0;
        VelocityY = 1;
    } else if (e.code == 'ArrowLeft') {
        VelocityX = -1;
        VelocityY = 0;
    } else if (e.code == 'ArrowRight') {
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



