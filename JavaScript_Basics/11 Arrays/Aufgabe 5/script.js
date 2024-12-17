//Berechne die Summe der geraden durch die Summe der ungeraden Zahlen
const data2 = "1,2,3,4,5,6,7,8,9,10,11,12"

let arrDat = data2.split(',');
let sumEven = 0;
let sumOdd = 0;


for (let i = 0; i < arrDat.length; i++) {
    if (parseInt(arrDat[i]) % 2 == 0) {
        sumEven += parseInt(arrDat[i]);
    }

    else {
        sumOdd += parseInt(arrDat[i]);
    }

}

console.log(sumEven / sumOdd);