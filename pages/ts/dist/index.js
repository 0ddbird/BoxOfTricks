"use strict";
function isDuoDigit(number) {
    const digitToString = Math.abs(number).toString();
    const result = new Set();
    for (let i = 0; i < digitToString.length; i++) {
        result.add(digitToString[i]);
        if (result.size > 2)
            return 'n';
    }
    return 'y';
}
console.log(isDuoDigit(102)); // n
console.log(isDuoDigit(1010)); // y
console.log(isDuoDigit(1000)); // y
console.log(isDuoDigit(-1000)); // y
