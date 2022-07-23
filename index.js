function add(a, b) {
    const sum = a + b;
    return sum;
}

function subtract(b, a) {
    const difference = b - a;
    return difference;    
}

function multiply(a, b) {
    const product = a * b;
    return product;
}

function divide(a, b) {
    const result = a / b;
    return result;
}

function increment(n) {
    n++;
    return n;
}

function decrement(n) {
    n--;
    return n;
}

function makeInt(n) {
    const parsed = parseInt(n, 10);
    return parsed;
}

function preserveDecimal(n) {
    const parsed = parseFloat(n);
    return parsed;
}