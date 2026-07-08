function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}
const result=sum(1,2,3,4,5);
console.log("The sum is:"+result);
console.log("The sum is:+$${result}");

// APPROACH 1: String Concatenation
// Uses the '+' operator to glue the variable directly to the string.
// Output: "The sum is:15"
// console.log("The sum is:" + result);


// APPROACH 2: Plain String (Syntax Typo)
// Because double quotes ("") are used, JavaScript treats ${result} as literal text.
// Output: "The sum is:+$${result}"
// console.log("The sum is:+$${result}");

// Literal Text: If you write down the words "${result}" on a physical piece of paper, 
// it just says "${result}". It doesn't magically turn into a number.
// Evaluated Code: If you write ${result} inside backticks, JavaScript reads it like an
//  instruction to lookup the value of that variable and write it down for you.

// THE CORRECT WAY: Template Literal
// Uses backticks (`) and ${} to safely inject the variable value dynamically.
// Output: "The sum is: 15"
console.log(`The sum is: ${result}`);