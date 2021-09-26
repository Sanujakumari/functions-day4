var numbers=[1,2,3,4,5,6,7,8,9];

var prime=()=>{
 
var result=numbers.filter(function(a){
  
   var p=0;
    
 if(a>1)
   
  {
       
  for(var i=2;i<=a;i++)
     
    {
           
  if(a%i==0   &&    a!=i)
            
 {
              
   p=1
           
  }
       
  }
         
if(p==0)
        
 {
           
  return a;
        
 }
    
 }
 
})

console.log(result); 

};
prime()


