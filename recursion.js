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

alert(sumToRecursion(2));
