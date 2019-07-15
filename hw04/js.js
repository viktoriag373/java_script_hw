"use strict"
function div(val, by){
    return (val - val % by) / by;
}

// function intToObject(int) {
//     var number = {};

//     if ((int > 999) || (int < 0)) {
//         console.log("число должно быть в диапозоне от 0 до 999");
//         return number;
//     }
  
//     number.int = int;
//     number.hundreds = div(int, 100);
//     number.tens = div(number.int - number.hundreds * 100, 10);
//     number.unit = number.int - number.hundreds * 100 - number.tens * 10;
//     return number;
// }

function intToObject(int) {
    var number = {};

    if ((int > 999) || (int < 0)) {
        console.log("число должно быть в диапозоне от 0 до 999");
        return number;
    }
  
    number.int = int;
    number.hundreds = div(int, 100);
    int -= number.hundreds * 100;
    number.tens = div(int, 10);
    number.unit = int - number.tens * 10;
    return number;
} 

var result = intToObject(245);
console.log(result);
