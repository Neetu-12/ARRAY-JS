// var a = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
// b=a.replace("over","on")
// c=b.replace("over","on")
// console.log(c);

// univarsal code.....
var a = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
i=0
while (i<a.length){
    b=a.split(" ")
    // console.log(b[i]);
    i=i+1
}
s=""
i=0
while(i<b.length){
    if(b[i]=="over"){
        s=s+" "+"on"
    
    }
    else{
        s=s+" "+b[i]
    }
    i=i+1
}
console.log(s);