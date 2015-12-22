/**
 * Created by Alina on 16.11.2015.
 */
/**************Task 1***********************************/
"use strict"
function sumTo(n){
    var result = 0;
    for(var i = n; i > 0; i--){
        result += i;
    }
    return result;
}



function sumToRecursion(n){
    if(n > 1){
        return n + sumTo(n - 1);
    } else{
        return n;
    }
}

function sumTo1(n){
    return n * (n + 1)/2
}

/**************Task 2***********************************/

function factorial(n){
    if(n == 1){
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


/**************Task 3***********************************/
function fib(n){
    if(n <= 1){
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

alert(fib(7));
