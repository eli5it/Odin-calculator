

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



  // primary place where nums are displayed
 
  let topText = '';
  // place where background operations are stored

  let operationChoice = '';
  let userInput = '';
  let firstOperand = 0   ;
  let secondOperand= "";


  const numbers   = "0123456789";
  const operators = "+-÷x";
  const bottomDisplay = document.querySelector('.lower-text');
  const topDisplay    = document.querySelector('.upper-text');
  let bottomText = bottomDisplay.textContent;
  
  // only displays numbers

  // event listener for buttons
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(button => button.addEventListener('click',() => {
    userInput = button.textContent;
    translateInput(userInput);
    updateScreen();
  }))




  const translateInput = function(userInput) {
    // on event listener being activated, this function is called
    // it receives the input of the user
    // and triggers the corresponding function to it
    if (userInput == '=') {
      handleEqual();
    } else if (userInput == 'DELETE'){
      deleteText();
    } else if (userInput == 'CLEAR') {
        resetCalc();  
    } else if (numbers.includes(userInput)){
        handleNumbers();
    } else if (operators.includes(userInput)) {
        handleOperators();
    } else if (userInput == '.') {
        handleDecimal();
    }
  }

  const resetCalc = function(userInput) {
    // deletes bottomText, topText, operation choice & userInput
    bottomText = "0";
    topText    = "";
    operationChoice = "";
    userInput = "";
    firstOperand = 0;
    secondOperand = '';
  }
  const deleteText = function(){
    // removes the last digit of input
    if (containsEqual(topText) || containsOperator(topText))
      {resetCalc()
      } else if  (bottomDisplay.textContent.length != '1')
      {bottomText = bottomText.slice(0, (bottomText.length - 1))
      } 
      else {bottomText = '0'}
    }

  const updateScreen = function() {
    bottomString = String(bottomText);
    if (bottomString.length >= 13)
      {bottomDisplay.textContent =(cutOffNum(bottomString))}
      else {bottomDisplay.textContent = bottomText;}
    setTopText();
    topDisplay.textContent= topText;
  }
  function cutOffNum(text) {
    return text.slice(0, 14)
  }
    
  
  const handleOperators = function() {
    if (topText== ''){
      topText = bottomText + userInput;
      operationChoice = userInput;
    } else if (containsEqual(topText) ){
      topText = bottomText + userInput;      
      operationChoice = userInput;
    }
      else if (containsOperator(topText) && secondOperand!== ''){
        if (operate(firstOperand, secondOperand, operationChoice))
         {bottomText = operate(firstOperand, secondOperand, operationChoice);
          firstOperand = bottomText;  
          secondOperand = '';
          operationChoice = userInput;
          topText = bottomText + operationChoice;
        }
      
      
    } 
    
  } 
    
  
  const handleNumbers = function() {
    if (bottomText == '0') {
      bottomText = userInput
      console.log('bones magones')
    } else {bottomText += userInput}
    if (!containsOperator(topText) ||containsEqual()) {
      firstOperand += userInput
    } else if (containsOperator(topText) && !containsEqual(topText))
     {secondOperand += userInput
      bottomText= secondOperand}
  } 
  const handleDecimal = function() {
    if (secondOperand== "" && containsOperator(topText) && (!String(bottomText).includes('.'))){
      bottomText= userInput;
    } else if ((!String(bottomText).includes('.'))) {
      bottomText+= userInput;
    }
  }


  function containsOperator(text) {
    // loops through the inputted str seeing if operator includes it's current index val
    for (let i = 0 ; i < text.length; i ++) {
      if (operators.includes(text[i])) {return true}}
    return false};
  function containsEqual() {
    // loops through the inputted str seeing if operator includes it's current index val
    return topText.includes('=') }

  const handleEqual = function() {
    if (containsOperator(topText) && !containsEqual(topText) && secondOperand !== "") {
      topText = topText + secondOperand + "=";
      result = operate(firstOperand, secondOperand, operationChoice);
      bottomText= result;
      firstOperand = result;
      secondOperand = '';
    } 
    }
  
  

  function findOperatorIndex(str) {
    for (let i = 0 ; i < str.length; i ++) {
      if (operators.includes(str[i])) {return i}}
  }
  function findEqualIndex(str) {
    for (let i = 0 ; i < str.length; i ++) {
      if ('='.includes(str[i])) {return i}}
  }
  function setTopText() {
    if (containsOperator(topText)){
      let pos = findOperatorIndex(topText);
      topText = topText.slice(0, pos) + " " + topText.slice(pos, pos +1) + " " + topText.slice(pos +1, topText.length);
    }
    if (containsEqual(topText))  {
      let pos = findEqualIndex(topText);
      topText = topText.slice(0, pos) + " " + topText.slice(pos, topText.length);
    } 
  }

  

  const operate = function(a, b, operator) {


    if (String(a).includes(".") || String(b).includes('.')) {
      a = parseFloat(a);
      b = parseFloat(b);
    }


    if (operator == "+") {
        return add(parseInt(a),parseInt(b));
    } else if (operator == "-") {
      return subtract(a, b);
    } else if (operator == 'x') {
      return multiply(a,b);
    } else if(operator == "÷" && b == '0') {
      alert("You can't divide by Zero, silly.");
      resetCalc();
      return false;
    } else if (operator == "÷" && b !== 0) {
        return divide(a,b);
    }
    }
    
