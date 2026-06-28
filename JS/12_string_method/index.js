// string methods = allow you to manipulate and work with text (strings)

let userName = "BroCode";

console.log(userName.charAt(0));          //finds the string element using index 
// Output: B
console.log(userName.indexOf("o"));       //finds first occurence index of string element 
// Output: 2
console.log(userName.lastIndexOf("o"));
// Output: 5
console.log(userName.length);
// Output: 7

let userName1 ="BroCode  "           //removes the space
userName1=userName1.trim();
console.log(userName1);
// Output: BroCode

let userName2 ="BroCode  "
userName2=userName2.toLowerCase();
console.log(userName2);
// Output: brocode  

let userName3 ="BroCode  "
userName3=userName3.repeat(5);
console.log(userName3);
// Output: 

let userName4 =" BroCode"
let result=userName4.startsWith(" ");     //returns true or false
if(result){
    console.log("Username cannot begin with space")
// Output: Username cannot begin with space
}
else{
    console.log(username4);
}

let userName5 ="BroCode "
let result1=userName5.endsWith(" ");     //returns true or false
if(result1){
    console.log("Username cannot end with space")
// Output: Username cannot end with space
}
else{
    console.log(username5);
}

let userName6 ="BroCode "
let result2=userName6.includes(" ");     //returns true or false
if(result2){
    console.log("Username cannot include an empty space")
// Output: Username cannot include an empty space
}
else{
    console.log(username6);
}

let phoneNumber1="123-456-7890";
phoneNumber1=phoneNumber1.replaceAll("-","/");
console.log(phoneNumber1);
// Output: 123/456/7890

let phoneNumber="123-456-7890";
phoneNumber=phoneNumber.padStart("15","0")
                                //how much character,characters 
                                // to be padded from the start of the string
console.log(phoneNumber);
// Output: 000123-456-7890

let phoneNumber2="123-456-7890";
phoneNumber2=phoneNumber2.padEnd("15","0")
                                //how much character,characters 
                                // to be padded at the end of the string
console.log(phoneNumber2);
// Output: 123-456-7890000
