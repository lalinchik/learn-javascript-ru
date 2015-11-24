var arr = [1, 2, 3, 4, 5];

function randomSort(a, b){
    return Math.random() - 0.5;
}

arr.sort(randomSort);
console.log(arr);

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [vasya , masha , vovochka ];

people.sort(mySort);
function mySort(personA, personB){
    return personA.age - personB.age;
}
for(var i = 0; i < people.length; i++) {
    console.log(people[i].name);
}


function aclean(arr){
    var obj = {};

    for(var i = 0; i < arr.length; i++){
        var sorted = arr[i].toLowerCase().split('').sort().join('');

        obj[sorted] = arr[i];
    }
    var result = [];

    for(var key in obj){
        result.push(obj[key]);
    }

    return result;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
console.log(aclean(arr));


function unique(arr) {
    var obj = {};
    for(var i = 0; i < arr.length; i++){
        var key = arr[i];
        obj[key] = true;
    }

    return Object.keys(obj);
}