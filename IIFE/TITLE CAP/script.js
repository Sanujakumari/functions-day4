var a=[1,2,3,4,5,6,7,8,9]

console.log("using IIFE function") 
var titlecaps=(function() {
	for(i=0;i<a.length;i++){
	var	b=[i][0].toUpperCase()
	var	c=a[i].slice(-(a[i].length-1))
		console.log(b.concat(c))
	}
})()
