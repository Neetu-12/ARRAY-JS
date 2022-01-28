var n=[1234, 122, 1984, 19372, 100]
l=[123,456,134]
i=0
n=[]
while (i<n.length(l)){
    while (l[i]>=10){
        l[i] = l[i]/10
    n.append(int(l[i]))
    i+=1}
}
j=0
while (j<n.length){
    k=1
    while (k<n.length){
        if (n[j]==n[k])
            console.log("True")
            // break
        else{
            print("False")
            break
        }
        k+=1
        i+=1
    }
}

// i=0
// while(i<n.length){
//     b=Math.floor(n[i]/10)
//     i++
//     console.log(b);
// }