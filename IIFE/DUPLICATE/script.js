var arr=['happy','sad','good','bad','happy','sad']

console.log("using IIFE function") 
var removeDuplicate=(function(){
	console.log(...new Set(arr))
})()