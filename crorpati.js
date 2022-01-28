var  a= [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var c1=0
var c2=0
var c3=0
for(i in a){
    // console.log(a[i]);
    if(a[i]<100000){
        c1=c1+1
    }
    else if( a[i]>=100000 && a[i]<10000000){
        c2=c2+1
    }
    else if(a[i]>=10000000){
        c3=c3+1
    }
}
console.log(c3,"crorpati");
console.log(c2,"lakhpati");
console.log(c1,"dilvale");






// var  kitna_paisa_hai= [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
// var count_of_crorepati=0;
// var count_of_lakhpati=0;
// var count_of_dilwale=0;
// for( var  i of kitna_paisa_hai){
//    if(i>= 10000000){
//        count_of_crorepati+=1
//    }
//    else if(i>=100000){
//        count_of_lakhpati+=1
//    }
//    else{
//        count_of_dilwale+=1
//    }
// }
 
// console.log(count_of_crorepati);
// console.log(count_of_lakhpati);
// console.log(count_of_dilwale);