/**
 * Created by Alina on 23.11.2015.
 */
"use strict";

var array = [];
while(true){
    var number = prompt("Введите, пожалуйста, число", 0);

    if(number === "" || isNaN(number) || number === null){
        break;
    }

    array.push(+number);
}
var sum = 0;
for(var i = 0; i < array.length; i++){
    sum += array[i];
}
alert(sum);
