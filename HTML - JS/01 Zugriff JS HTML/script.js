

document.getElementById("button").addEventListener("click", function () {


    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const operator = document.getElementById("op").value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("is not a number");
    }

    else {
        if (operator === '+') {
            const sum = parseFloat(value1) + parseFloat(value2)
            document.getElementById("result").innerText = "Sum: " + sum;
        }

        if (operator === '*') {
            const sum = parseFloat(value1) * parseFloat(value2)
            document.getElementById("result").innerText = "Product: " + sum;
        }

        if (operator === '-') {
            const sum = parseFloat(value1) - parseFloat(value2)
            document.getElementById("result").innerText = "Sum: " + sum;
        }

        if (operator === '/') {
            const sum = parseFloat(value1) / parseFloat(value2)
            document.getElementById("result").innerText = "Sum: " + sum;
        }

    }

});

