/**
 * Created by Alina on 16.11.2015.
 */

for(var i = 1; i <= 10; i ++){
    if(i%2 == 0) {
        alert(i)
    }
}


var i = 0;
while (i < 3){
    alert( "номер " + i + "!" );
    i++;
}

while(true){
    var value = prompt("Введите число больше 100", 0);
    if(value <= 100 || value == null){
        continue;
    }
    break;
}

var num;
do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);

var max = 10;
outer:
for(var  i = 2; i < max; i++){
    for(var j = 2; j < i; j++){
        if(i%j == 0){
            continue outer;
        }
    }
    alert(i);

}