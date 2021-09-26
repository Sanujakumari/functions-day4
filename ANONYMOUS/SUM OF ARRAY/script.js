console.log("Sum of all numbers in an array using anonymous function")

var arr=[10,12,13,14,5]

var S=function() {
var sum=0;
for(i=0;i<arr.length;i++) {
	sum=sum+arr[i]
}
console.log(sum)
} 
S()