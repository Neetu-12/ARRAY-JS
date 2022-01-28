var a=['Red', 'Maroon', 'Yellow', 'Olive']
for (i in a){
    var b=a[i].splice(" ")
}
console.log(b);
// Convert the said list of strings into list of lists:
// [['R', 'e', 'd'], ['M', 'a', 'r', 'o', 'o', 'n'], ['Y', 'e', 'l', 'l', 'o', 'w'], ['O', 'l', 'i', 'v', 'e']]
