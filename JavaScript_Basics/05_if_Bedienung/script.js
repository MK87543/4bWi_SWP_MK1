let number = 91;

if (number < 20) {
    console.log("Die Zahl ist kleienr als 20");
}


// Aufgabe 1
// Wenn die Zahl kleiner ist als 20  gib aus "Mini"
// Wenn die Zahl zw. 20 und 50 ist gib aus "Medium"
// Wenn die Zahl größer als 50 ist gib aus "Large"

if (number < 20) {
    console.log("Mini");
}

else if (number > 20 && number < 50) {
    console.log("Medium");

}

else if (number > 50) {
    console.log("Large");

}

// Aufgabe 2
// Wenn die Zahl kleiner gleich 7 ist gib aus "Mini"
// Wenn die Zahl zwischen 7 und 90 ist gib  aus "Medium"
// Wenn die Zahl größer als 90 ist gib aus "Large"
if (number <= 7) {
    console.log("Mini");
}

else if (number > 7 && number < 90) {
    console.log("Medium");

}

else if (number > 90) {
    console.log("Large");

}