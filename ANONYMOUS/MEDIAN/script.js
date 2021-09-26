console.log("Return median of two sorted arrays of same size")
var arr1=[1,20,23,24,25]
var arr2=[6,27,28,29,30]

var median=function(){
	var newarray=arr1.concat(arr2);
	if(newarray.length%2===0){
		console.log((newarray[newarray.length/2]+newarray[newarray.length/2-1])/2)
	}
	else {
		console.log(newarray[Math.floor(newarray.length/2)])
	}
} 
median()