console.log("using IIFE function")
var a =[10,11,12,13,14,15,16,17,18,19]
var k=1

var Rotatedarray=(function(){

for(j=1;j<=k;j++){
    temp=a[0]
    for(i=0;i<a.length-1;i++){
        a[i]=a[i+1]
        
    }
   a[i]=temp
}
console.log(a)
})
()