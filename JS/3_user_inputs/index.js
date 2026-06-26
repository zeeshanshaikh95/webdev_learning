//How to accept user inputs
//1.EASY WAY->WINDOW prompt
//2.PROFESSIONAL WAY= HTML TEXTBOX
let user1;
user1=window.prompt("What is ur name")
// Window prompt  generates a pop-up window that takes user input.
console.log(user1);



let username;
document.getElementById("submit").onclick=function(){
    // username=document.getElementById("user").value;
    // console.log(username);
    document.getElementById("submit").onclick=function(){
        username=document.getElementById("user").value;
        document.getElementById("myH1").textContent=`Welcome ${username}`;
    }
    
}