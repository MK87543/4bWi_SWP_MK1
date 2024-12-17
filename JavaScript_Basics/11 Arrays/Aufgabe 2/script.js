/*

The program:
Invertiere eine Bitfolge


EXAMPLE:
Input
000111000
Output
111000111

*/

let input = "000111000";
let arrInput = input.split('');

let newStr = "";

for (let i = 0; i < arrInput.length; i++) {

    if (arrInput[i] == 1) {
        newStr += "0";
    }

    else {
        newStr += "1";
    }

}

console.log(newStr);