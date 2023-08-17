function Factorial(num) { 

  var total = 1;
  var numArr = [];
  
  for(var i = 1; i <= num; i++) {
  		numArr.push(i);
  }
  
  numArr.forEach( function( value ) {
    total *= value;
  });
  
  return total; 
         
}
   
console.log(Factorial(4)); 