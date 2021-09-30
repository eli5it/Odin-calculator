







// Part 1 of exercise

const add = function(a, b) {
    return a + b
  
  };
  
  const subtract = function(a, b) {
      return a - b
  };


  const multiply = function(a, b) {
    return a * b
  };
  
  const divide = function(a, b) {
      // b != 0
      return a / b
  };
    
  const factorial = function(num) {
    // accepts integer values >= 0
    output = 1;
      if (num == 0 ||  num == 1){return output};
    for (let i = 2; i <= num; i++)
    {output *=i};
    return output
  };

  // not exactly sure what it means by operator
  const operate = function(a, b, operator) {
      if (operator == "+") {
          return add(a,b);

      } else if (operator == "-") {
        return subtract(a, b);
      } else if (operator == "*") {
        return multiply(a,b);
      } else if (operator == "/") {
        return divide(a,b)
      } else return "error unsupported operation" 
    }    
// not sure which of my operate functions will be better

  const operate2 = function(a, b, operator) { 
      return (operator == "+") ? add(a,b)
           : (operator == "-") ? subtract(a,b)
           : (operator == "*") ? multiply(a,b)
           : (operator == "/") ? divide(a,b): console.log('error')
           // the console.log shit is just here as a placeholder
        }

  // 





