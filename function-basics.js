/**********Task 1***************/
function checkAg(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Родители разрешили?');
    }
}

function checkAge(age){
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age){
    return (age > 18) || confirm('Родители разрешили?');
}

/**********Task 2***************/
function min(a, b){
    return (a < b) ? a : b;
}

/**********Task 3***************/
function pow(a, b){
    var  result;
    for(var i = 0; i < b; i++){
        result *= a;
    }
    return result;
}

var a = prompt("Введите число", "");
var b = prompt("Введите степень", "");

if(b < 0){
    alert('Степень ' + n + 'не подходит, введите целую степень, больше 1');
} else {
    alert( pow(a, b) );
}
