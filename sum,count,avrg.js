var a = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var c1=0
var c2=0
sum1=0
sum2=0
for(i in a){
    if(a[i]%2==0){
        c1=c1+1
        sum1=sum1+a[i]
    }
    if(a[i]%2!=0){
        c2=c2+1
        sum2=sum2+a[i]

    }
}
avrg=(sum1+sum2/11)
console.log(c1,c2,sum1,sum2,avrg);
























// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
// var count_odd_numbers=0;
// var sum_odd_numbers=0;
// var sum_even_numbers=0;
// var count_even_numbers=0;
// for(var i of elements){
//    if(i%2 ===0){
//        sum_even_numbers+=i;
//        count_even_numbers+=1;
//    }
//    else{
//        sum_odd_numbers+=i;
//        count_odd_numbers+=1;
//    }
// }
// console.log((sum_even_numbers+sum_odd_numbers)/2);
// console.log(count_odd_numbers);
// console.log(count_even_numbers);
// console.log(sum_odd_numbers);
// console.log(sum_even_numbers);
