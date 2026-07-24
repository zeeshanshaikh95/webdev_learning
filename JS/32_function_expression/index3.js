// function declaration = define a reusable block of code
//                        that performs a specific task

// const numbers =[1,2,3,4,5];
// const squares = numbers.map(square);

// console.log(squares);

// function square(element){
//     return Math.pow(element, 2);
// }

//function expression
const numbers =[1,2,3,4,5];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);

const evenNumbs= numbers.filter(function(element){
    return element%2==0;
})
console.log(evenNumbs);

