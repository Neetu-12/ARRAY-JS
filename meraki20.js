char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
uniques=[]
for(var i of char_list){
   if(!uniques.includes(i)){
       uniques.push(i)
   }
}
console.log(uniques);
 
for(var j of uniques){
   count=0
   for(var k of char_list){
       if (j === k){
           count+=1
       }
   }
   console.log(j,count,"-" ,"times");
}


// a = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// i=0
// r1=[]
// while i<len(a):
//     j=0
//     r=[]
//     c=0
//     while j<len(a):
//         if a[i]==a[j]:
//             c=c+1
//         j=j+1
//     r.append(a[i])
//     r.append(c)
//     if r not in r1:
//         r1.append(r)
//     i=i+1
// print(r1)