//  = assignment operator
// == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
// != inequality operator
// !== strict inequality operator

const PI = 3.14;

if(PI == "3.14"){       //value is equal but not datatype
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}

if(PI === "3.14"){       //value is equal but not datatype
    console.log("That is Pi");
}
else{
    console.log("That is NOT Pi");
}

if(PI != "3.14"){       //value is equal but not datatype
    console.log("That is NOT Pi");
}  
else{
    console.log("That is Pi");
}

if(PI !== "3.14"){       //value is equal but not datatype
    console.log("That is NOT Pi");
}
else{
    console.log("That is Pi");
}