// string slicing = creating a substring
//                  from a portion of another string


//                  string.slice(start, end)
const fullName = "Broseph Code";

// let firstName = fullName.slice(0, 3);        //string slicing is exclusive, it slices excluding the element mentioned i.e +1
// let lastName = fullName.slice(4, 8);
// console.log(firstName);
// Output: Bro
// console.log(lastName);
// Output: eph 

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);
// console.log(firstName);
// Output: Bro
// console.log(lastName);
// Output: eph 

let firstName = fullName.slice(0, fullName.indexOf(" "));

let lastName = fullName.slice(fullName.indexOf(" ") + 1);           //+1 to remove the space
                                //if only start is used it will include string elements till end 

console.log(firstName);
// Output: Broseph

console.log(lastName);
// Output: Code



const email= "zee@gmail.com"
let user= email.slice(0, email.indexOf("@"));
let extension= email.slice(email.indexOf("@")+1);

console.log(user);
// Output: zee
console.log(extension);
// Output: gmail.com
