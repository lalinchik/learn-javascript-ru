/**
 * Created by Alina on 19.11.2015.
 */
"use strict";

function isEmpty(obj) {

    for(var key in obj){
        return false
    }
    return true;
}

function sumSalaries(obj) {
    if(isEmpty(obj)){
        console.log("Нет сотрудников");
    }

    var sum = 0;
    for(var key in obj) {
        sum += obj[key];
    }

    console.log(sum);
}

function maxSalaries(obj) {
    if(isEmpty(obj)){
        console.log("Нет сотрудников");
    }

    var max = 0;
    var employee = "";
    for (var key in obj){
        if(obj[key] > max){
            max = obj[key];
            employee = key;
        }
    }

    console.log(employee);
}

var salaries = {
    "Вася": 500,
    "Петя": 300,
    "Даша": 250
};

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric(obj){
    for(var key in obj){
       if(isNumeric(obj[key])){
           obj[key] *= 2;
       }
    }
}
multiplyNumeric(salaries);

for(var key in salaries){
    console.log(key + " " + salaries[key]);
}

