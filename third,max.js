// if m[i]>sec and m[i]<max:
// sec=max
// max=m[i]
// if m[i]>sec>m[i]<max:
// thirdmax=m[i]
var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7]
var m=0
var sm=0
var tm=0
var i=0
while(i<numbers.length){
    if(numbers[i]>m){
        tm=sm
        sm=m
        m=numbers[i]
    }
    else if(sm<numbers[i] && m>numbers[i]){
      sm=m
      m=numbers[i]
    }
    else if(numbers[i]>sm &&  numbers[i]<m){
        tm=numbers[i]
    }
    i=i+1
}
console.log("first max", m);
console.log("second max", sm);
console.log("third max", tm);