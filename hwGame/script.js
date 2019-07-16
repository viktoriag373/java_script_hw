window.onload = function() {
    var inputAnswer = document.querySelector('.answer'); 
    var button = document.querySelector('.button');     
    var textStatus = document.querySelector('.status');  
    var log = document.querySelector('.log');           
    var count = 0;      

    function random(min, max) {                         
        return Math.round(min + Math.random() * (max - min)); 
    }
    var randomNumber = random(1, 5);                     
    console.log(randomNumber);                          
    

    //addEventListener(type, func)
    button.addEventListener('click', function() {        
        var inputValue = inputAnswer.value;
        inputAnswer.value = '';
        count++;
        if (inputValue == randomNumber) {
            textStatus.innerText = ' Поздравляем! Вы угадали число!';
            textStatus.style.backgroundColor = '#024b08';
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



    });
};