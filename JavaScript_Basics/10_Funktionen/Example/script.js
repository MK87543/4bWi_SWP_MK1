function printMenu(name, age, place) {
    console.log("Willkommen " + name + "! You are " + age + " years old and from " + place);
    console.log("Drücke");
    console.log("1 für Start");
    console.log("2 für Statistik");
    console.log("3 für Ende");

}


printMenu("Hans", 58, "Dornbirn");

// Task
/* Baue folgende Funktionen:

add(a, b)
subtract(a, b)
mulitply(a, b)
supercalculation(a, b) -> Formel: (a + b) / 2 * a
printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern.


Anbei ist die Formel zur Berechnung on Ostern. 
*/

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}


function mulitply(a, b) {
    return a * b;
}

function supercalculation(a, b) {
    return (a + b) / 2 * a;
}

function printEasterDate(year) {
    let N = year - 1900;
    let A = N % 19;
    let B = Math.floor((7 * A + 10) / 19);
    let M = (11 * A + 4 - B) % 29;
    let Q = Math.floor(N / 4);
    let W = (N + Q + 31 - M) % 7;
    let P = 25 - M - W

    if (P > 0) {
        console.log("Ostersonntag ist am " + P + ". April " + year);
    } else {
        console.log("Ostersonntag ist am " + 31 + ". März " + year);

    }


}


let resultadd = add(4, 7);
let resultsub = subtract(8, 4);
let resultmulti = mulitply(5, 3);
let resultsuper = supercalculation(5, 7);
console.log("add: " + resultadd);
console.log("sub: " + resultsub);
console.log("multi: " + resultmulti);
console.log("super: " + resultsuper);
printEasterDate(2023);