"use strict";
/*var styles = ["Джаз", "Блюз"];
styles.push("Рок-н-Ролл");
styles[styles.length - 2] = "Классика";
//alert(styles.shift());
styles.unshift("Рэп", "Регги");

var rand = Math.floor(Math.random() * styles.length);
//alert(styles[rand]);



var array = [];
while(true){
    //var number = prompt("Введите, пожалуйста, число", 0); щоб не заважало вирішувати інші задачі

    if(number === "" || isNaN(number) || number === null){
        break;
    }

    array.push(+number);
}*/
/*var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
}*/
//alert(sum);


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



