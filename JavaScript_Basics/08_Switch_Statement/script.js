// Erstelle eine Zufallszahl zwischen 5 und 10
let randomNumber = Math.floor(Math.random() * 6) + 5;

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight

switch (randomNumber) {
    case 10:
        {
            console.log("Ten");
            break;
        }

    case 9:
        {
            console.log("Nine");
            break;
        }

    case 8:
        {
            console.log("Eight");
            break;
        }

    case 7:
        {
            console.log("Seven");
            break;
        }

    case 6:
        {
            console.log("Six");
            break;
        }

    case 5:
        {
            console.log("Five");
            break;
        }

    case 4:
        {
            console.log("Four");
            break;
        }


    case 3:
        {
            console.log("Three");
            break;
        }

    case 2:
        {
            console.log("Two");
            break;
        }

    case 1:
        {
            console.log("One");
            break;
        }

    default:
        console.log("Error");

}
