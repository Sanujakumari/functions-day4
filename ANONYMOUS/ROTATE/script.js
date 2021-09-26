console.log("Rotate an array by k times and return the rotated array")
var a=[1,2,3,4,5,6,8,9,10,11,12,13,14,15,16]
var k=1
var Rotatearray=function(){

for(j=1;j<=k;j++){
    temp=a[0]
    for(i=0;i<a.length-1;i++){
        a[i]=a[i+1]
        
    }
   a[i]=temp
}
console.log(a)
} 
Rotatearray()