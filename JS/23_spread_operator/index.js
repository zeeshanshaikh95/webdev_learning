// spread operator = ... allows an iterable such as an
//                      array or string to be expanded
//                      into seperate elements
//                      (unpacks the elements)

let numbers =[1,2,3,4,5];
let maximum = Math.max(...numbers);      
let minimum = Math.min(...numbers);
// Math.max() expects individual numeric arguments, not a single array.
// Without ..., Math.max() tries to convert the entire array into a number, 
// which fails and results in NaN (Not a Number). The ... unpacked elements fix this.
console.log(minimum);


let username="Zee";
let letters=[...username].join("-");
console.log(letters);

let fruits=["apple", "banana", "orange"];
let vegetables=["carrot", "broccoli", "spinach"];
let Food=[...fruits, ...vegetables];
//combining elements of different arrays into a single array using the spread operator
console.log(Food);