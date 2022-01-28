var a=[ ['g', 'f', 'g'], ['i', 's'], ['b', 'e', 's', 't'] ]
var s=""
var i=0
while(i<a.length){
    j=0
    while(j<a[i].length){
        s=s+a[i][j]
        j++
    }
    i++
}
console.log(s);