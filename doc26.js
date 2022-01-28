var a= [4, 5, 5, 5, 3, 8]
// var a=[1, 1, 1, 64, 23, 64, 22, 22, 22]
var count=0
var i=0
var r=[]
while(i<a.length){
    count=count+1
    if(count==3){
        r.push(a[i])
    }
    i++
}
console.log(r);
// Output: 5
// Input: [1, 1, 1, 64, 23, 64, 22, 22, 22]
// Output: 1, 22
