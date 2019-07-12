
/*function fibonacci(n, prev1, prev2) {
    var current = prev1 + prev2;
    var fibonacci_string = current + " ";

    console.log("n="+ n + ", prev1=" + prev1 + ", prev2=" + prev2 +
    ", current=" + current + ", fs=" + fibonacci_string);
    if (n > 1) {
        fibonacci_string += fibonacci(n - 1, current, prev1);
        fibonacci_string += "";
    }
    console.log("fibonacci_string=" + fibonacci_string);
    return fibonacci_string;
} 

alert ( fibonacci(3, 1, 0) );*/


/*
function summ(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function div (a, b) {
    if (b == 0) {
        console.log("деление с нулями не производится");
        return undefined;
    } else {
        return a / b;
    }
}

function mul(a, b) {
    return a * b;
}


function mathOperation(a, b, str) {
    switch(str) {
        case "Сложение":
            return summ(a, b);
        case "Вычитание":
            return sub(a, b);
        case "Деление":
            return div(a, b);
        case "Умножение":
            return mul(a, b);
        default: 
            console.log('Ошибка');
            return undefined;
            
    }
}

console.log(mathOperation(2, 2, "Сложение"));
console.log(mathOperation(6, 2, "Вычитание"));
console.log(mathOperation(3, 2, "Умножение"));
console.log(mathOperation(10, 2, "Деление"));
*/

/*
function power(val, pow) {
    if (pow == 1) {
        return val;
    } 
    
    return power(val, pow - 1) * val;
}

console.log(power(2, 3));
*/

function factorial(n) {
    if (n == 1) {
        return n
    }

}

console.log (factorial(4));