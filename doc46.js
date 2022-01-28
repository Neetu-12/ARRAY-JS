var a=['0', '1', '2', '3', '4']
var b=['red', 'green', 'black', 'blue', 'white']
var c=['100', '200', '300', '400', '500']
var r=[]
for (i in a){
    d=a[i]+b[i]+c[i]
    r.push(d)
}
console.log(r);
// ['0red100', '1green200', '2black300', '3blue400', '4white500']
