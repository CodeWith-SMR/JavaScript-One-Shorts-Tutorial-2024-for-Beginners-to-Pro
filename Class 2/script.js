// Operators in JS
// Arithmetic Operators
// Used to perform some operation on data

// +, -, *, /
// Modulus
// Exponentiation
// Increment
// Decrement

let a = 10;
let b = 5;
console.log(`a = ${a} & b = ${b}`);
console.log(`a + b ${a + b}`);
console.log(`a - b ${a - b}`);
console.log(`a * b ${a * b}`);
console.log(`a / b ${a / b}`);
console.log(`a % b ${a % b}`);
console.log(`a ** b ${a ** b}`);

let c = 13;
let d = 2;
console.log(`c = ${c} & d = ${d}`);

console.log(`++c = ${++c}`);
console.log(`--d = ${--d}`);




// Operators in JS
// Assignment Operators
// = += -= *= %= **=

let e = 13;
let f = 2;

e += 4; //e = e + 4
console.log(`e = ${e}`); //17

e -= 4; //e = e - 4
console.log(`e = ${e}`); //9

e *= 4; //e = e * 4
console.log(`e = ${e}`); //52

e /= 4; //e = e / 4
console.log(`e = ${e}`); //3.25

e %= 4; //e = e % 4
console.log(`e = ${e}`); //1

e **= 4; //e = e ** 4
console.log(`e = ${e}`); //28561




// Operators in JS
// Comparison Operators
// Equal to ==
// Not equal to !=
// Equal to & type ===
// Not equal to & type !==
// >, >=, <, <=


let g = 2;
let h = "5";

console.log(`13 == 2 ${g == h}`);
console.log(`13 !== 2 ${g !== h}`);
console.log(`13 == 2 ${g == h}`);
console.log(`13 === 2 ${g === h}`);
console.log(`g > h ${g > h}`);
console.log(`g < h ${g < h}`);
console.log(`g >= h ${g >= h}`);
console.log(`g <= h ${g <= h}`);



// Operators in JS
// Logical Operators
// Logical AND &&
// Logical OR ||
// Logical NOT !

let i = 5;
let j = 2;

let cond1 = i > j; //true
let cond2 = i === j; //false
console.log(`cond1 && cond2 ${cond1 && cond2}`);
console.log(`cond1 || cond2 ${cond1 || cond2}`);
console.log(`!(i<j) ${!(i<j)}`);




// Conditional Statements
// To implement some condition in the code
// if Statement

// let age = prompt("wath is your age");
// if (age >= 18) {
//     console.log("you can vote")
// } else {
//     console.log("you CANNot vote")
// }



let mode = prompt("chos a ModeColor")
if (mode === 'Dark') {
    console.log("Black")
}  else if (mode === 'Light') {
    console.log("White")
} else {
    console.log() 
}