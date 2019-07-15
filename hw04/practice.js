"use strict";

function random(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

var randomNum = random(1,5); 
var count = 0;

function checkAnswer(random) {
    var moves = [];
    var answer = +prompt('Укажите число от 1 до 5 (-1 – закончить игру)');
    moves.push(answer);
    var gameIsRunning = true;
    
    while(gameIsRunning) {
        if (answer == -1) {
            gameIsRunning = false;
        } else if (answer == 0 && isNaN(answer)) {
            alert('Вы не ввели число\nВыход.');
            gameIsRunning = false;
        } else if (answer == random) {
            alert('Поздравляем, вы угадали число!');
            gameIsRunning = false;
        } else {
            count++;
            answer = +prompt('Не угадали.\nУкажите число (-1 – закончить игру)\nПопыток: ' + count);
            moves.push(answer);
        }
        
    }
    alert( "Вы вводили " + moves);
}

checkAnswer(randomNum);



