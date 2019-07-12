//первое задание

var a = 0;
var b = 100;
while (a <= b ) {
    console.log(a++);
}



//второе задание

function two(a, b) {
    do {
        if (b == 0) {
            console.log(b + ' - это ноль');
        } else if ((b % 2) == 0) {
            console.log(b + ' - четное число');
        } else {
            console.log(b + ' - нечетное число');
        }
        b++;
    } while (b <= a);
}

two(10, 0);            //будет считать до 10 от 0 



//третье задание

for (var a = 0; a <= 9; console.log(a++)) {

}


//четвертое задание

var a = ''; 
for (var c = 0; c < 20; c++) {
    a += 'X';
    console.log(a);
}