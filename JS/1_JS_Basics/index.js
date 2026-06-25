console.log('Hello');
console.log('I like pizza!');

// window.alert('This is an alert!');
// window.alert('I like pizza!');

document.getElementById("myH1").textContent = 'Hello';
document.getElementById("myP").textContent = 'I like pizza!';

// This is a comment

/*
    This
    is
    a
    comment
*/


// Variables
// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

// 1. declaration    let x;
// 2. assignment     x = 100;

let age1 = 25;
let price1 = 10.99;
let gpa1 = 2.1;

//DataTypes=Numbers
console.log(typeof gpa1);
console.log(`You are ${age1} years old`);
console.log(`The price is $${price1}`);
console.log(`Your gpa is: ${gpa1}`);

//String
let firstName = "Bro";
let favoriteFood = "pizza";
let email = "Bro123@gmail.com";

console.log(typeof firstName);
console.log(`Your name is ${firstName}`);
console.log(`You like ${favoriteFood}`);
console.log(`Your email is ${email}`);

//boolean
// let online = false;
// let forSale = true;
// let isStudent = true;

// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

//printing on webpage

let fullName = "Bro ";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
