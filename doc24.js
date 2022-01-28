a = [1,2,3,1,2,2]
r=[]
for (i in a){
    if(!r.includes(a[i])){
        r.push(a[i])
    }
}
console.log(r);
// Output: [1,2,3]
