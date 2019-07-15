window.onload = function() {
    var inputAnswer = document.querySelector('.answer');
    var button = document.querySelector('.button');
    var textStatus = document.querySelector('.status');
    var log = document.querySelector('.log');
    var input = document.querySelector('.input')
    var count = 0;

    var logData = 'Попытка №: ';
    var inputNumber = '';

    function random(min, max) {
        return Math.round(min + Math.random() * (max - min));
    }
    var randomNumber = random(1, 5);
    console.log(randomNumber);
    

    //addEventListener(type, func)
    button.addEventListener('click', function() {
        var inputValue = inputAnswer.value;
        count++;
        if (inputValue == randomNumber) {
            textStatus.innerText = ' Поздравляем! Вы угадали число!';
        } else if(inputValue == 0 && isNaN(inputValue)) {
            textStatus.innerText = 'Вы ввели не то, что нужно';
        } else {
            if ( inputValue < randomNumber ) {
                textStatus.innerText = 'Ваше число меньше';
            } else if(inputValue > randomNumber) {
                textStatus.innerText = 'Ваше число больше';
            }
        }
        logData += count + ', ';
        log.innerText = logData;

        inputNumber += inputValue + ', ';
        input.innerText = inputNumber;
    });
};