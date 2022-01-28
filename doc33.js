// PARTR -I
var n=[12, 67, 98, 34]
var r=[]
for (i=0;i<n.length;i++){
    dividend=n[i]
    sum=0
    while( dividend>0 ){
        remainder=dividend%10
        sum=sum+remainder
        dividend=Math.floor(dividend/10)
    }
    r.push(sum)
}
console.log(r);

// PART-II
var a=[15, 81, 11, 234]
r=[]
for(i=0;i<a.length;i++){
    var b=a[i]
    var sum=0
    while(b>0){
        c=b%10
        sum=sum+c
        b=Math.floor(b/10)
    }
    r.push(sum)
}
console.log(r);
