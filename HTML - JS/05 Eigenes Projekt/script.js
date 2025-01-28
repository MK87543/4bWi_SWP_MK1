function serial_calc() {
    let number1 = parseFloat(document.getElementById("field1").value);
    let number2 = parseFloat(document.getElementById("field2").value);

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter a number!");
        return;
    }

    let result = number1 + number2;
    document.getElementById("result").innerHTML = result;
}

function parallel_calc() {
    let number1 = parseFloat(document.getElementById("field1").value);
    let number2 = parseFloat(document.getElementById("field2").value);

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter a number!");
        return;
    }

    if (number1 === 0 || number2 === 0) {
        alert("Resistance cannot be zero for parallel calculation.");
        return;
    }

    let result = 1 / ((1 / number1) + (1 / number2));
    document.getElementById("result").innerHTML = result;
}