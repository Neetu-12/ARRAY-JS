var a=require("readline-sync").questionInt("enter starting no:-")
var b=require("readline-sync").questionInt("enter ending no:-")
for(i=a;i<=b;i++){
    if(i==0){
        break
    }
    console.log(i);
}