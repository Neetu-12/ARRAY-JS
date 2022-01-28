var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var m=0
var sm=0
var i=0
while(i<numbers.length){
    if(numbers[i]>m){
        sm=m
        m=numbers[i]
    }
    else if(sm<numbers[i] && m>numbers[i]){
        sm=numbers[i]
    }
    i=i+1
}
console.log(sm);