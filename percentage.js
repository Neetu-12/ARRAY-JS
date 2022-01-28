var a=require("readline-sync").question("enter subjects:-")
var b=a.split(" ")
i=0
sum=0
while(i<b.length){
    sum=sum+b[i]
    i=i+1
}
console.log(Math.floor(sum/20*100));

