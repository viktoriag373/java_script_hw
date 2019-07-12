//первое задание

//первое задание

// var a = 0;
// var b = 100;
// while (a <= b ) {
//     console.log(a++);
//}


// function isSimpleNumber(number) {
//     if (number < 2) {
//         return false;
//     }
//     var count = 2;
//     while (count < number) {
//         if (number % count === 0) {
//             return false;
//         }
//         count++;
//     }
//     return true;
// }

// function maxNumber(max) {
//     var a = 0;
//     var simpleNumbers = [];
//     while (a < max) {
//         if (isSimpleNumber(a)) {
//             simpleNumbers.push(a);
//         }
//         a++;
//     }
//     return simpleNumbers;
// }

// console.log(maxNumber(100));




function isSimpleNumber(number) {
    if (number < 2) {
        return false;
    }

    for (var count = 2; count < number; count++) {
        if (number % count === 0) {
            return false;
        }
    }
    return true;
}

function maxNumber(max) {
    var simpleNumbers = [];
    for (var a = 0; a < max; a++) {
        if (isSimpleNumber(a)) {
            simpleNumbers.push(a);
        }
    }
    return simpleNumbers;
}

console.log(maxNumber(100));




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