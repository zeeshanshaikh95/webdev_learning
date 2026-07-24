// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code

const hello = (name, age) => {console.log(`Hello ${name}`)
                             console.log(`You are ${age} years old`)};

hello("Bro", 25);

setTimeout(()=>console.log("hello"),3000)