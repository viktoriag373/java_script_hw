window.onload = function() {
    var inputAnswer = document.querySelector('.answer'); 
    var buttonAnswer = document.querySelector('.button_answer');  
    var buttonStartStop = document.querySelector('.button_start_stop');    
    var textStatus = document.querySelector('.status');  
    var log = document.querySelector('.log');   
    var randomNumber;
    var count = 0;      



    function setInputEnabled(enabled) {
        //inputAnswer.style.display = enabled ? '' : 'none';
        //buttonAnswer.style.display = enabled ? '' : 'none';

        if (enabled) {
            inputAnswer.style.display = '';
            buttonAnswer.style.display = '';
        } else {
            inputAnswer.style.display = 'none';
            buttonAnswer.style.display = 'none';
        }


        // inputAnswer.disabled = !enabled;
        // buttonAnswer.disabled = !enabled;
    }

    function random(min, max) {                         
        return Math.round(min + Math.random() * (max - min)); 
    }

    function starNewGame() {
        log.innerText = '';
        count = 0;
        randomNumber = random(1, 5);
        console.log(randomNumber);
        
        textStatus.style.backgroundColor = '#198543';
        textStatus.innerText = 'Компьютер загадал число';
        setInputEnabled(true);

        inputAnswer.onkeypress = function(event) {   //передается событие
            if (event.code === 'Enter') {
                checkGame();
            }
        }

        buttonAnswer.onclick = checkGame;
           
        buttonStartStop.value = 'Закончить игру'
        buttonStartStop.onclick = function() {
            textStatus.innerText = 'Конец игры((\n Компьютер загадал число ' + randomNumber;
            textStatus.style.backgroundColor = '#000';
            endGame();
        }
    }

    function endGame() {
        setInputEnabled(false);
        buttonStartStop.value = 'Новая игра'
        buttonStartStop.onclick = starNewGame;
    }

    function checkGame() {
        var inputValue = inputAnswer.value;
        inputAnswer.value = '';
        count++;
        if (inputValue == randomNumber) {
            textStatus.innerText = ' Поздравляем! Вы угадали число!';
            textStatus.style.backgroundColor = '#024b08';
            endGame();

        } else if(inputValue == 0 || isNaN(inputValue)) {
            textStatus.innerText = 'Вы ввели не то, что нужно';
            textStatus.style.backgroundColor = '#4b022c';
        } else {
            if ( inputValue < randomNumber ) {
                textStatus.innerText = 'Ваше число меньше';
            } else if(inputValue > randomNumber) {
                textStatus.innerText = 'Ваше число больше';
            }
            textStatus.style.backgroundColor = '#4b022c';
        }

        var logItem = document.createElement('p');
        logItem.innerText = 'Попытка №: ' + count + ', Ваш ход - ' + inputValue;
        log.appendChild(logItem);
    }




              
    starNewGame();
};
