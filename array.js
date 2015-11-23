"use strict";

var arr = [];
var max = 100;
for(var i = 2; i < max; i++){
    arr.push(i);
}

var newArr = [];
outer:
for(var j = 2; j < arr.length; j++){
    for(var k = 2; k < j; k++){
        if(j%k == 0) {
           continue outer;
        }
    }
    newArr.push(j);
}
console.log(newArr);



