var arr=[10,12,13,14,5]

console.log("using IIFE function") 
var S=(function() {
var sum=0;
for(i=0;i<arr.length;i++) {
	sum=sum+arr[i]
}
console.log(sum)
})()
