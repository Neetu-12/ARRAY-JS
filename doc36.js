var a=['1', '2', '3', '4', '5', '6', '7', '8']
var i=0
var r=[]
while (i<a.length-1){
    j=1
    while (j<a.length){
        b=a[i]+a[j]
        r.push(b)
        i++
        j++
    }
}
console.log(r);