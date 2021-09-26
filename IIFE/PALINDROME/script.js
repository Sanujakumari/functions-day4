var array=['malayalam','abc','12121']
var b=[]
console.log("using IIFE function")
 var palindrome=(function() {
 	for(var i=0;i<array.length;i++){
 	    var count=0
    for(var j=0;j<array[i].length;j++){
 		if(array[i][j]!==array[i][(array[i].length-1)-j]) {
 		   break;
 		}
 		 count++
    }
   if(count===array[i].length){
       b.push(array[i])
   }
    
 	}
 	
 	console.log(b)
   
 })();