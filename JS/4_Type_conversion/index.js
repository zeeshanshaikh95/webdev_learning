// type conversion = change the datatype of a value to another
//                   (strings, numbers, booleans)
 
//user input is accepted as a string
// let age=window.prompt("Enter your age");
// age+=1;
// console.log(age);   //output shows 201 without conversion

// let age=window.prompt("Enter your age");
// age=Number(age);
// age+=1;
// console.log(age, typeof age);   //adds the +1 to the entered number

let x1="pizza";
let y1="pizza";
let z1="pizza";
x1=Number(x1);
y1=String(y1);
z1=Boolean(z1)
console.log(x1,typeof x1);  //Not a Number its a string
console.log(y1,typeof y1);  
console.log(z1,typeof z1);  //returns true because we have defined value to the variable

let x2="0";
let y2="0";
let z2="0";
x2=Number(x2);
y2=String(y2);
z2=Boolean(z2);
console.log(x2,typeof x2);
console.log(y2,typeof y2);
console.log(z2,typeof z2);

let x3="";
let y3="";
let z3="";
x3=Number(x3);
y3=String(y3);
z3=Boolean(z3)
console.log(x3,typeof x3);   //if we empty the input the compiler puts the value as 0
console.log(y3,typeof y3);
console.log(z3,typeof z3);



//const variable
// const = a variable that can't be changed

const PI = 3.14159;    //capital PI is not used in strings considered as a bad practice
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
