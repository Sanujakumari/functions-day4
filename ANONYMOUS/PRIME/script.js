console.log("Return all the prime numbers in an array ")
var a=[10,11,12,13,14,15,16,17,18,19]
var Prime=function(){
var b=[]
for(i=0;i<a.length;i++){
    for(j=2;j<=a[i];j++){
        if(a[i]%j===0){
           break;
        }
        
    }
    if(a[i]===j){
        b.push(a[i])
    }
}
console.log(b)
}
 Prime()