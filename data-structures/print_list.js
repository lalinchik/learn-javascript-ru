function printList(list) {
    var tmp = list;

    while (tmp) {
        alert( tmp.value );
        tmp = tmp.next;
    }
}

function printList2(list) {

    alert( list.value );

    if (list.next) {
        printList(list.next);
    }
}

function printReverseList(list) {
    var arr = [];
    var tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        alert( arr[i] );
    }
}
function printReverseList2(list) {

    if (list.next) {
        printReverseList(list.next);
    }

    alert( list.value );
}
