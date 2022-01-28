var a= [6,1,3,5,6,3,1]
var r=[]
for (i in a){
    // console.log(i);
    if (!r.includes(a[i])){
        r.push(a[i])
    }
}
console.log(r);
var m=1
for(j=0;j<r.length;j++){
    m=m*r[j]
}
console.log(m);