// Variables in JS
// Variables are containers for data

// let myName = "Muhammad Raza";
// let myClass = 10;
// let age = 19;

// let a = null;
// let b = undefined;
// let isFollow = true;

// Variable Rules
// Variable names are case sensitive; “a” & “A” is different.
// Only letters, digits, underscore( _ ) and $ is allowed. (not even space)
// Only a letter, underscore( _ ) or $ should be 1st character.
// Reserved words cannot be variable names.

// console.log(`My Name ${myName} My Age ${age} My Class ${myClass}`);




// let, const & var
// var : Variable can be re-declared & updated. A global scope variable.
// let : Variable cannot be re-declared but can be updated. A block scope variable.
// const : Variable cannot be re-declared or updated. A block scope variable.

// var myName = "Muhammad Raza";
// myName = "Muhammad Raza";
// var myClass = 10;
// var age = 19;

// let myName = "Muhammad Raza";
// myName = "Muhammad Raza";
// let myClass = 10;
// let age = 19;

// const myName = "Muhammad Raza";
// myName = "Muhammad Raza";
// const myClass = 10;
// const age = 19;

// console.log(`My Name ${myName} My Age ${age} My Class ${myClass}`);


// {
//     let a = 5;
//     //let a = 10; error
//     console.log(a);
// }
// {
//     let a = 10; //no error
//     console.log(a);
// }



// Data Types in JS
// Primitive Types : Number, String, Boolean, Undefined, Null, BigInt, Symbol

// let age = 19;
// console.log(typeof age);

// let myName = "Muhammad Raza";
// console.log(typeof myName);

// let isFollow = true;
// console.log(typeof isFollow);

// let a;
// console.log(typeof a);

// let b = null;
// console.log(typeof b);

// let c = BigInt(135);
// console.log(typeof c);

// let d = Symbol(357);
// console.log(typeof d);

const student = {
    fullName: 'Muhamad Raza',
    age: 19,
    class: 10,
    isPass: true
};
console.log(student);
console.log(student.age);
console.log(typeof student);

const product = {
    title: 'Pen',
    reting: 7,
    offer: false,
    price: 130
}
console.log(product);
console.log(product.price);
console.log(typeof product);

const profile = {
    userName: '@Muhammad Raza',
    isFollow: true,
    posts: 47,
    followers: 62,
    following: 9,
    bio: 'I am Muhammad Raza'
}
console.log(profile);
console.log(profile.bio);
console.log(typeof profile);