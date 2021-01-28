// Coding Challenge 1

// First Group of Data
// let markWeight = 78;
// let markHeight = 1.69;
// let johnWeight = 92;
// let johnHeight = 1.95;

// Second group of data
let markWeight = 95;
let markHeight = 1.88;
let johnWeight = 85;
let johnHeight = 1.76;

let markBmi = markWeight / markHeight ** 2;

console.log( markWeight / markHeight ** 2)
console.log(markBmi);

let johnBmi = johnWeight / (johnHeight * johnHeight);

console.log( johnWeight / johnHeight ** 2)
console.log(johnBmi);

let markHigherBMI = markBmi > johnBmi;
console.log(markHigherBMI);

