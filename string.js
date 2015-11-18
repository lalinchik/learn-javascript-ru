/**
 * Created by Alina on 18.11.2015.
 */
function ucFirst(str) {
    if (!str) return str;
    var newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}

function checkSpam(str) {
    var spam1 = "viagra";
    var spam2 = "xxx";
    var strNew = str.toLowerCase();

    if (~strNew.indexOf(spam1) || ~strNew.indexOf(spam2)) {
        return true;
    }

    return false;
}

function truncate(str, maxlength) {
    var newStr;
    if (str.length > maxlength) {
        newStr = str.slice(0, (maxlength - 3)) + "...";
        return newStr;
    }

    return str;
}

function extractCurrencyValue(str){

    return +(str.substring(1));
}
