// variable scope = where a variable is recognized
//                  and accessible (local vs global)

function1();

function function1(){
    let x = 1;           //local variable x is not accessible outside of function1
    console.log(y);   
}

function function2(){
    let y = 2;            //local variable y is not accessible outside of function2
    console.log(x); 
}
