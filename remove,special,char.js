var b=require("readline-sync").question("")
var c=""
var d=""
for(i of b){
    if(i=="@"|| i=="!"||i=="#"||i=="$"||i=="%"||i=="^"||i=="&" || i=="*" || i==")"||i=="("||i=="~"||i=="\\" || i=="<"||i===">"||i=="?"||i==","||i=="."||i=="+"||i==";"||i=="`"||i==" "||i=="'"||i=='"'||i==":"||i=="_"||i=="{"||i=="}"||i=="["||i=="]"||i=="-"||i=="=="){
        
    }
    else{
        c=c+i;
        d=i+d
    }

}
if(c==d){
    console.log("palindrome",c,d);
}
else{
    console.log("not palindrome",c,d);
}