function f(x) {
    alert(arguments.length ? 1 : 0);
}

function sum() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }

    return result;
}

console.log(sum(1, 2, 3, 10));