// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array
//
//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array

function openFridge(...foods){      //rest parameter used to bundle all arguments into an array called foods 
    console.log(...foods);          //spread operator expands the array into individual elements
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);
