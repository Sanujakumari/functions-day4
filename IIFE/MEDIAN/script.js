var arr1=[10,11,12,13,14]
var arr2=[5,6,7,8,9]

console.log("using IIFE function")
var median=(function(){
	var newarray=arr1.concat(arr2);
	if(newarray.length%2===0){
		console.log((newarray[newarray.length/2]+newarray[newarray.length/2-1])/2)
	}
	else {
		console.log(newarray[Math.floor(newarray.length/2)])
	}
})()