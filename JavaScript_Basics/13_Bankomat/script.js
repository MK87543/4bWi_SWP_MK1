/*
Diese Aufgabe setzt sich aus allen gelernten Inhalten zusammen!
Erstelle ein Programm, das einen Bankomaten simuliert. Folgende Möglichkeiten gibt es:
1. Einzahlen
2. Abheben
3. Kontostand
4. Beenden
Folgendes Video zeigt dir die Funktionsweise 
*/
import { read } from "fs";
import { createInterface } from "readline";

const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});

const readlineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
        });
    });
};

let money = 0;
let abbruch = true;
console.log("1. Einzahlen \n2. Abheben\n3. Kontostand\n4. Beenden");
let input = await readlineAsync();

do {
    let balance = 0;


    switch (input) {

        case "1":
            console.log("Geben sie den Betrag ein den Sie einzahlen möchten:");
            balance = Number(await readlineAsync());
            console.log("Sie haben [" + balance + "] Eingezahlt!");
            money += balance;
            balance = 0;

            break;

        case "2":
            console.log("Wieviel möchten Sie abheben:");
            balance = Number(await readlineAsync());
            console.log("Sie haben [" + balance + "] Abgehoben!");
            money -= balance;
            balance = 0;


            break;

        case "3":
            console.log("Der Kontostand beträgt: [" + money + "]");

            break;


        case "4":
            console.log("Bankomat wird gestoppt");
            readline.close();
            process.exit(0);
            break;

        default:
            console.log("Ungültige Eingabe.");
    }
    console.log("_________________________________________________________________________________");
    console.log("1. Einzahlen \n2. Abheben\n3. Kontostand\n4. Beenden");
    input = await readlineAsync();

} while (abbruch)