while (true) {
    var result = prompt('Введите градусы по цельсию');

    if (result == null) {
        break;
    } 

    var tc = parseInt(result);

    if (isNaN(tc)) {
        alert('Вы не то ввели! Введите число!');
    } else {
        var tf = (9 / 5) * tc + 32;
        alert(tf);
        break;
    }

}



