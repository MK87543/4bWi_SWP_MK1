

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
            document.getElementById("result").innerText = sum;
        }

        if (operator === '*') {
            const sum = parseFloat(value1) * parseFloat(value2)
            document.getElementById("result").innerText = sum;
        }

        if (operator === '-') {
            const sum = parseFloat(value1) - parseFloat(value2)
            document.getElementById("result").innerText = sum;
        }

        if (operator === '/') {
            const sum = parseFloat(value1) / parseFloat(value2)
            document.getElementById("result").innerText = sum.toFixed(5);
        }

    }

});


document.getElementById("clear").addEventListener("click", function () {

    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
    document.getElementById("op").value = "";
    document.getElementById("result").innerText = "result";


});
