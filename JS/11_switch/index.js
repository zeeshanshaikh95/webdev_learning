// SWITCH = can be an efficient replacement to many else if statements
// Normally, a switch statement compares the value inside switch() to the
// value of each case using strict equality (===).When you write switch(true),
// you are telling JavaScript: "Look for the first case block that evaluates 
// to true."JavaScript goes down the list and evaluates the expression in 
// each case (e.g., Is testScore >= 90?).If an expression resolves to true,
// it matches switch(true), and that block of code runs.
let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}

console.log(letterGrade);

// let day = 2;

// switch(day){
//     case 1:
//         console.log("It is Monday");
//     case 2:
//         console.log("It is Tuesday");
//     case 3:
//         console.log("It is Wednesday");
//     case 4:
//         console.log("It is Thursday");
//     case 5:
//         console.log("It is Friday");
//     case 6:
//         console.log("It is Saturday");
//     case 7:
//         console.log("It is Sunday");
//     default:
//         console.log(`${day} is not a day`);
// }
