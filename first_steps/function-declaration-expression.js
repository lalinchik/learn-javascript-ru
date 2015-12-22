/**
 * Created by Alina on 16.11.2015.
 */
function sayHi() {
    alert( "Привет" );
}

var func = sayHi;
func();

sayHi = null;
sayHi();// ошибка

func();