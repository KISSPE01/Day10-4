// Conditons

/*
let myVariable = false;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}
*/

console.log ('conditions exercise 1:')
let myVariable = true;
if (myVariable === true) {
  console.log('The condition has been evaluated to true');
}

/*
let a = 7;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}
*/

console.log ('conditions exercise 2:')
let a = 2;
if (a < 5) {
  console.log(a / 2);
} else {
  console.log(a * 2);
}

// Loops

console.log('loop exercise 1:');
for (let i = 0; i <= 9; i++) {
    console.log(i);
}

console.log('loop exercise 2:');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('loop exercise 3:');
for (let i = 0; i <= 20; i = i + 2) {
    console.log(i);
}

// Functions

let printNumbersTill = (limit) => {
for (let i = 0; i <= limit; i++) {
    console.log(i);
}
}

let getGreeting = (name) => {
    return `Hello ${name}!`;
}

console.log('function exercise with input 20');
printNumbersTill(20);
console.log('function exercise with input 15');
printNumbersTill(15);
console.log('greeting with input Peter');
console.log(getGreeting('Peter'));

// Loops and arrays

let printValues = (array) => {
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
}

console.log('Loops and arrays exercise 1:');
printValues([1,4,10,143,55,2012]);

let printValues2 = (array) => {
    array.forEach((element) => {
        console.log(element);
    })
}

console.log('Loops and arrays exercise 2:');
printValues2([1,4,10,143,55,2012]);
