/**
 * Created by Alina on 18.11.2015.
 */
/*var value1 = +prompt("Введите первое число", "");
 var value2 = +prompt("Введите второе число", "");*/

//alert(value1 + value2);

//alert((0.1 * 10 + 0.2 * 10)/10);
//alert((0.1 + 0.2).toFixed(2))

function getDecimal(num){
    var result;
    if(num > 0) {
        result = +(+num - Math.floor(num)).toFixed(5);
    } else {
        result = +(-num % 1).toFixed(5);
    }
    return result;
}

function fibBinet(n){
    var s = Math.pow(((1 + Math.sqrt(5))/2), n);
    var x = Math.pow(((1 - Math.sqrt(5))/2), n);
    var result = (s - x)/Math.sqrt(5);
    return result;
}

function fib(n) {
    var a = 1,
        b = 0,
        x;
    for (i = 0; i < n; i++) {
        x = a + b;
        a = b
        b = x;
    }
    return b;
}

function random(max){
    return Math.random() * max;
}
function random(min, max){
    var result = min + Math.random * (max - min);
    result = Math.round(result);
    return result;
}
alert(random(15));

