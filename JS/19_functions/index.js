// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function happyBirthday(username, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old`);
}

happyBirthday("Bro",20);
happyBirthday("Sister",30);

function addNumbers(num1,num2){
    return num1 + num2;
}

let sum = addNumbers(5, 10);
console.log(sum);

function isEven(num){
    return num % 2 == 0 ? true : false;
}
console.log(isEven(4));  //true

function isValidEmail(email){
    return email.includes("@") ? true : false;
}
console.log(isValidEmail("user@example.com"));  //true