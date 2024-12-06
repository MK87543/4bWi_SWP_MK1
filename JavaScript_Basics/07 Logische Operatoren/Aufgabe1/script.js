let input = "1 2 3 4 5 6".split(" ")
let sum = 0;

for (let i = 0; i <= input.length; i++) {
    if (parseInt(input[i]) % 2 == 0) {
        sum += parseInt(input[i]);
    }
}

console.log(sum);