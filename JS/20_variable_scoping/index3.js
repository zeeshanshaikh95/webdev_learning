let x = 3;

function1();

function function1(){
    let x = 1;
    console.log(x);     //1
}
//local variable is preferred over global variable if they have the same name in the same scope
function function2(){
    let x = 2;
    console.log(x);     //2
}
