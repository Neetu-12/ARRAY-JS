var a=[1,2,3,4,5,6,7,8,9,10]
var i=0
var r=[]
while (i<a.length){
    j=1
    while (j<a.length){
        var d=a[j]-a[i]
            r.push(d)
        j++
        i++
    }
}
console.log(r);