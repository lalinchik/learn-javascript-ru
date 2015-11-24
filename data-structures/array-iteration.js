"use strict";
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function (word) {
    return word.length;
});

console.log(arrLength);

function getSums(arr) {
    var result = [];

    if (!arr.length) return result;


    var totalSum = arr.reduce(function (sum, item) {
        result.push(sum);
        return sum + item;
    });
    result.push(totalSum);

    return result;
}
