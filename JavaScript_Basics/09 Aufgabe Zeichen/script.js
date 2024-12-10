let row = 4;
let collum = 4;

for (let i = 0; i < row; i++) {

    if (i % 2 == 0) {
        console.log("XXXX");
    }

    else {
        console.log("OOOO");

    }
}


let summe = 0;

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        summe += i
    }
}

console.log(summe);

