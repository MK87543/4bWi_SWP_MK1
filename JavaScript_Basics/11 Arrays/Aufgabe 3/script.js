let input = "5 -2 -8 4 5";
let arrInput = input.split(' ');
let min = parseInt(arrInput[0]);

for (let i = 1; i < arrInput.length; i++) {

    let num = parseInt(arrInput[i]);

    let absNum = Math.abs(num);

    let absMin = Math.abs(min);

    if (absNum < absMin || (absNum == absMin && num > min)) {
        min = num;
    }
}
console.log(min);
