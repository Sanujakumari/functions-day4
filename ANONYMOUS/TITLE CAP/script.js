console.log("Convert all the strings to title caps in a string array")
 console.log("using anonymous function") 

var a=['suraj','ram','sham','tam']

var titlecaps=function() {
	for(i=0;i<a.length;i++){
		b=[i][0]
		c=a[i].slice(-(a[i].length-1))
		console.log(c.toUppercase)
	}
}
titlecaps()
