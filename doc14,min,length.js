var a=[[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]
var ml=0
var i=0
while(i<a.length){
    if (a[i].length>ml){
        ml=a[i].length
        b=a[i]
    }
    i=i+1
}
// console.log(ml,b);

var min=ml
var j=0
while (j<a.length){
    if (a[j].length<min){
        min=a[j].length
        c=a[j]
    }
    j=j+1
}
console.log(min,c);