/**
 * Created by Alina on 15.11.2015.
 */
"use strict"

/*
 var companyName = prompt("Каково «официальное» название JavaScript?", "");

 if(companyName === "EcmaScript"){
 alert("Верно!")
 } else{
 alert("Не знаете? «EcmaScript»!");
 }
 */

/*
 var number = prompt("Напишите любое число", '');

 if(+number > 0){
 alert(1);
 } else if(+number < 0){
 alert(-1);
 } else {
 alert(0);
 }
 */

var login = prompt("Введитье ваш логин", "");

if(login === "Админ"){
    var password = prompt("Введите ваш пароль", "");
    if(password === "Чёрный Властелин") {
        alert("Добро пожаловать!");
    } else if(password === null){
        alert("Вход отменен")
    } else{
        alert("Пароль неверен");
    }
} else if(login === null){
    alert("Вход отменен!");
} else {
    alert("Я вас не знаю");
}



