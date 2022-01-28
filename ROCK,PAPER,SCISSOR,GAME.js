console.log("!!!...WELCOME TO ROCK,PAPER,SCISSOR  GAME..!!!");
var user=require("readline-sync").question("ENTER ROCK,PAPER,SCISSOR:-")
var comp=["rock","paper","scissor"]
var secret_no=Math.floor(Math.random() * comp.length);
var computer=comp[secret_no];
console.log(computer);
if(user=="rock" && computer=="paper" || user==="paper" && computer==="scissor" || computer==="rock" && user==="scissor"){
        console.log("computer is winner");
}
else if(user=="scissor" && computer==="paper" || user==="paper" && computer=="rock" || user==="rock" && computer==="scissor"){
    console.log("user is winner");
}
else if(user!=computer){
    console.log("Invalid characters");
}
else{
    console.log("GAME IS DRAW");
}



// console.log("!!!...WELCOME TO ROCK,PAPER,SCISSOR  GAME..!!!");
// var user=require("readline-sync").question("Enter rock,paper,scissor:-")
// var comp=["rock","paper","scissor"]
// var secret_no=Math.floor(Math.random() * comp.length);
// var computer=comp[secret_no];
// console.log(computer);
// if(user=="rock" && computer=="paper"){
//     console.log("computer is winner");
// }
// else if(user=="rock" && computer=="scissor"){
//     console.log("user is winner");
// }
// else if(user=="paper" && computer=="rock"){
// console.log("user is winner");
// }
// else if(user=="paper" && computer=="scissor"){
//     console.log("user is winner");
// }
// else if(user==="scissor" && computer==="rock"){
//     console.log("computer is winner");
// }
// else if(user!=computer){
//     console.log("invalide characters");
// }
// else{
//     console.log("draw");
// }
