console.log("Remove duplicates from an array")

var arr=[1,2,1,'happy','sad','happy']
var removeDuplicate=function(){
	console.log(...new Set(arr))
}
 removeDuplicate()