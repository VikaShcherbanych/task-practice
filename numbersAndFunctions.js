function one(callback) {
    return callback ? callback(1) : 1;
};

function two(callback) {
    return callback ? callback(2) : 2;
};

function three(callback) {
    return callback ? callback(3) : 3;
};

function four(callback) {
    return callback ? callback(4) : 4;
};

function five(callback) {
    return callback ? callback(5) : 5;
};

function six(callback) {
    return callback ? callback(6) : 6;
};

function seven(callback) {
    return callback ? callback(7) : 7;
};

function eight(callback) {
    return callback ? callback(8) : 8;
};

function nine(callback) {
    return callback ? callback(9) : 9;
};

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => a - b;
const divide = (a) => (b) => a / b;
const multiply = (a) => (b) => a * b;

console.log(one(plus(three())));
console.log(two(minus(three())));
console.log(three(divide(three())));
console.log(four(multiply(three())));