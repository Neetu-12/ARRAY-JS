// var n = [10, 11, 12, 13, 14, 17, 18, 19]
// var number =30;
// output=[]
// for(var i of n){
//     // console.log(i);
//    for(var j of n){
//     //    console.log(j);
//        if (i+j === number){
//            output.push([i,j])
//        }
//   }
// }
// console.log(output);


var a = [10, 11, 12, 13, 14, 17, 18, 19]
b=30
r=[]
for (i of a){
    for (j of a){
        if(i+j==b){
            r.push([i,j])
        }
    }
}
console.log(r);
