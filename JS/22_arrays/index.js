// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana"];

// fruits.push("coconut");
// fruits.pop();
// fruits.unshift("mango");

// The .unshift() method adds
// one or more elements to the
// beginning of an array and
// returns the new length of the array.

//fruits.shift();
// The .shift() method removes the very first
// element from an array and returns that removed element.

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
for(let fruit of fruits){
    console.log(fruit);
}
    // for(let i=0; i<=fruits.length-1; i++){
    //     console.log(fruits[i]);
    // }

fruits.sort().reverse();

// 1. .sort() rearranges alphabetically -> ["apple", "banana", "coconut", "orange"]
// 2. .reverse() flips that order completely backward -> ["orange", "coconut", "banana", "apple"]
console.log(fruits);




let numOfFruits = fruits.length;
let index= fruits.indexOf("banana");
console.log("Number of fruits: " + numOfFruits);
console.log("Index of banana: " + index);



