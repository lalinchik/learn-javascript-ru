// 20 февраля 2012 года, 3 часа 12 минут.
"use strict";
var date = new Date(2012, 1, 20, 3, 12);
console.log(date);

function getWeekDay(date){
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}
function  getLocalDay(date){
    var days = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

    if(date.getDay() == 0){
        return 7;
    }

    return date.getDay();
}

function getDateAgo(date, days) {
    var dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);

    return dateCopy.getDate();
}

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);
    var result = date.getDate()

    return result;
}

function getSecondsToday(){
    var date = new Date();

    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    var dif = date - today;
     return Math.round(dif / 1000);
}

function getSecondsToTomorrow(){
    var date = new Date();

    var tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDay() + 1);
    var diff = tomorrow - date;
    return Math.round(diff / 1000);
}

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}