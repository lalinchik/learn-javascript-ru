function sum(a){

    return function(b){
        return a + b;
    }
}

/*
function makeBuffer() {
    var text = "";

    return function (str){
        if(arguments.length == 0){
           return text;
        }
        text += str;
    };
}
*/

function makeBuffer() {
    var text = "";

    function buffer(str){
        if(arguments.length == 0){
            return text;
        }
        text += str;
    }

    buffer.clear = function(){
        text = "";
    }

    return buffer;
}


function filter(arr, func) {
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        if(func(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function inBetween(a, b) {
    return function(x){
        return x >= a && x <= b;
    }
}

function inArray(arr) {
    return function(x) {
        return arr.indexOf(x) != -1;
    }
}


function makeArmy() {

    var shooters = [];

    for (var i = 0; i < 10; i++) {

        var shooter = (function(x) {

            return function() {
                alert( x );
            };

        })(i);

        shooters.push(shooter);
    }

    return shooters;
}