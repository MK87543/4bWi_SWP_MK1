let a = 4;
let b = 9;
let c = 8;

let arr = [4, 9, 8];

arr.push(10);
arr.push(3);


for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}


//Aufgabe 1
/* 	Erstelle ein Array mit folgenden Werten:
    4,1,2,3
    Füge die Werte 17 und 199 dazu
	
        a. Gib alle Werte in einer Schleife aus!
        b. Zähle alle Werte zusammen und gib das Ergebnis aus
        c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus
    	
*/

let arr1 = [4, 1, 2, 3];
let sum = 0;

arr1.push(17);
arr1.push(199);


for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
    sum += arr1[i];
}
console.log(sum);
console.log(sum / arr1.length);



//Aufgabe 2
/* 	Erstelle ein Array mit folgenden Strings:
    "Susi", "Paula", "Hans"
	
    Gib folgenden Satz aus:
    "Meine Freunde sind Susi, Paula und Hans
	
    Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten:
    "Meine Freunde sind Susi, Paula, Hans und Sepp"
    	
*/

let arrNames = ["Susi", "Paula", "Hans"];

for (let i = 0; i < arrNames.length; i++) {
}

console.log("Meine Freunde sind " + arrNames[0] + ", " + arrNames[1] + ", " + arrNames[2])
