// Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
// Preis von 8 Äpfeln
// Preis von 17 Bananen
// Preis von 1 Tonne Äpfel
// Preis von 1 Tonne Bananen

let banana = "Banane";
let apple = "Apple";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleWeight = 0.34;
let bananaWeight = 0.22;

let anzahlApple = 1 / appleWeight;
let anzahlanan = 1 / bananaWeight;

let pricePerApple = applePricePerKilo * appleWeight;
let pricePerBanana = bananaPricePerKilo * bananaWeight;


console.log("Preis von 8 Äpfeln " + 8 * pricePerApple);
console.log("Preis von 17 Bananen " + 17 * pricePerBanana);
console.log("Preis von 1 Tonne Äpfel " + 1000 * applePricePerKilo);
console.log("Preis von 1 Tonne Bananen " + 1000 * bananaPricePerKilo);
