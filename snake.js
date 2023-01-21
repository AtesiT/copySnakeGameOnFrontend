
// Доска
// Размеры блоков и доски
let blockSize = 25; 
let rows = 20;
let cols = 20;
let board;
let context;


window.onload = function() {
    board = document.getElementById('board');
    // Делаем "площадь" доски
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext('2d');
    // Рисование на доске (сверху)
    update();
}


// Для обновления доски
function update() {
    context.fillstyle = 'black';
    context.fillRect(0, 0, board.width, board.height);
}



