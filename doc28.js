var n=require("readline-sync").questionInt("enter no:-")
var a=[1 ,1 ,2,3, 4,5, 1, 2]
var r=[]
var i=0
while(i<a.length){
    if(a[i]!=n){
        r.push(a[i])
    }
    i++
}
console.log(r);

// var n=require("readline-sync").questionInt("enter no:-")
// var a=[5 ,6 ,7,8,9,8 ,8 ,9 ,10]
// var r=[]
// var i=0
// while(i<a.length){
//     // console.log(a[i]);
//     if(a[i]!=n){
//         r.push(a[i])
//     }
//     i++
// }
// console.log(r);