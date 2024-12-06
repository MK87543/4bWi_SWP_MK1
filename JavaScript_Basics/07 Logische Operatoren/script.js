
if (41 > 70 || 4 < 4) {
    console.log("Is True")
}

// Erstelle zwei Zufallszahl zwischen 0 und 100
// Speichere diese jeweils in einer Variable
let randomNumber = Math.random() * 100;
let randomNumber2 = Math.random() * 100;

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"
if (randomNumber < randomNumber2 && randomNumber < 50) {
    console.log(randomNumber, " ist kleiner als ", randomNumber2, " und mini");
}

else {
    console.log("1. -> False")
}

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

if (randomNumber < 30 || randomNumber2 < 30) {
    console.log("Einer der beiden ist kleiner als 30");
}
else {
    console.log("2. -> False")
}


// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"

if (randomNumber < 50 && randomNumber2 != 50) {
    console.log("Erste Zahl ist klein, zwei kein 50iger");
}

else {
    console.log("3. -> False")
}
