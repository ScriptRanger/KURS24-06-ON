// 1. Summiere gerade Zahlen

// /*
function sumEvenNumbersForLoop() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log("Summe der geraden Zahlen (For-Schleife):", sumEvenNumbersForLoop());
// */

// /*
function sumEvenNumbersWhileLoop() {
    let sum = 0;
    let i = 1;
    while (i <= 100) {
        if (i % 2 === 0) {
            sum += i;
        }
        i++;
    }
    return sum;
}

console.log("Summe der geraden Zahlen (While-Schleife):", sumEvenNumbersWhileLoop());
// */

// 2. Finde die Fakultät


// /*
function factorialForLoop(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}

console.log("Fakultät von 5 (For-Schleife):", factorialForLoop(5));
// */


// /*
function factorialWhileLoop(n) {
    let result = 1;
    let i = n;
    while (i > 0) {
        result *= i;
        i--;
    }
    return result;
}

console.log("Fakultät von 5 (While-Schleife):", factorialWhileLoop(5));


// */