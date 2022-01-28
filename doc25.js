var a= [4, 6, 4, 3, 3, 4, 3, 4, 3, 8]
var K=3
var i=0
var count=0
var r=[]
while(i<a.length){
    count=count+1
    if(count==3){
        r.push(a[i])
    }
}
console.log(r);


// // a=[1, 1, 1, 64, 23, 64, 22, 22, 22]
// i=0
// r=[]
// while (i<1)
// 	r.push(a[1])
// 	r.push(a[3])
// 	i=i+1
// console.log(r)