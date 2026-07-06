// MEthod CHaining-> Calling of one method
// after another in one continuous line of code


// let username = window.prompt("Enter your username: ");

// ----- NO CHAINING -----
// let username=window.prompt("ENter UserName");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

// ----- METHOD CHAINING -----

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
