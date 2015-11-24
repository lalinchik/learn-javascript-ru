 // подход к проверке наличия класса вызовом obj.className.indexOf(cls) был бы неверным. В частности,
 // он найдёт cls = "menu" в строке классов obj.className = "open mymenu".
 function addClass1(obj, cls) {
 var str = obj.className;
 var arr = str.split(" ");

 if (arr.indexOf(cls) == -1) {
 arr.push(cls);
 }

 obj.className = arr.join(" ");
 }


 function addClass(obj, cls){
 var arr = obj.className ? obj.className.split(" ") : [];

 for(var i = 0; i < arr.length; i++){
 if(arr[i] == cls){
 return;
 }
 }

 arr.push(cls);
 obj.className = arr.join(' ');
 }

function camelize(str) {
    if (str !== "") {
        var arr = str.split("-");
    } else {
        return "";
    }

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }

    return arr.join("");
}


function removeClass(obj, cls){
    var arr = obj.className.split(" ");

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == cls){
            arr.splice(i, 1);
            i--;
        }
    }
    obj.className = arr.join(' ');
}

function filterRangeInPlace(arr, a, b){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1);
            i--;
        }
    }
}

var arr = [1, 2, 3, 4, 5];
for(var i = 0; i < arr.length; i++){             // альтернативное решение
    for(var j = 0; j < arr.length - i; j++){     // function compareReversed(a, b) {
        if(arr[j] < arr[j + 1]){                 //   return b - a;
            var tmp = arr[j];                    // }
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;                    //  arr.sort(compareReversed);
        }
    }
}

var arr2 = ["HTML", "JavaScript", "CSS"];
var arrSorted = arr2.slice().sort();
console.log(arr);


