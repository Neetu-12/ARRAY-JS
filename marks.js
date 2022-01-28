var a=[[78, 76, 94, 86, 88],[91, 71, 98, 65, 76],[95, 45, 78, 52, 49]]
var sum=0
var i=0
while(i<a.length){
    j=0
    while(j<a[i].length){
        sum=sum+a[i][j]
        j=j+1
    }
    i=i+1
}
console.log(sum);