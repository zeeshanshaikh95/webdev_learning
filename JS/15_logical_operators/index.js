// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                     AND = &&
//                     OR  = ||
//                     NOT = !

let temp = 20;

if(temp > 0 && temp <30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}


temp = 100;

if(temp < 0 || temp > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}


const isSunny=true;

if(!isSunny){
    console.log("It is NOT sunny outside");
}
else{
    console.log("It is sunny outside");
}