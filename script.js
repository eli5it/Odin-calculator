







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



  // primary place where nums are displayed
 
  let topText = '';
  // place where background operations are stored

  let operationChoice = '';
  let userInput = '';
  let storeInput = false;
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
    if (bottomDisplay.textContent.length != '1')
      {bottomText = bottomText.slice(0, (bottomText.length - 1))
      } else {bottomText = '0'}
    }
       

  const updateScreen = function() {
    bottomDisplay.textContent = bottomText;
    setTopText();
    topDisplay.textContent= topText;
  }
  // const handleOperators = function() {
  //   if (topText == ''){
  //     topText = bottomText + userInput;
  //     operationChoice = userInput;
  //   } else if (!containsOperator()) {
      
  //   } else if (containsOperator()){}
  //   console.log(topText);
  //   bottomText = operate(firstOperand, secondOperand, userInput);
  // } 
    
  
  const handleNumbers = function() {
    if (bottomText == '0') {
      bottomText = userInput
    } else {bottomText += userInput}
    if (!containsOperator() ||containsEqual()) {
      firstOperand += userInput
    } else if (containsOperator() && !containsEqual())
     {secondOperand += userInput
      bottomText= secondOperand}
  } 


  function containsOperator() {
    // loops through the inputted str seeing if operator includes it's current index val
    for (let i = 0 ; i < topText.length; i ++) {
      if (operators.includes(topText[i])) {return true}}
    return false};
  function containsEqual() {
    // loops through the inputted str seeing if operator includes it's current index val
    return topText.includes('=') }

  const handleEqual = function() {
    if (!containsOperator()) {
    } else if (containsOperator() && secondOperand !== ""){
      operate(a, b, operationChoice)
    }
  }
  

  function findOperatorIndex(str) {
    for (let i = 0 ; i < str.length; i ++) {
      if (operators.includes(str[i])) {return i}}
  }
  function setTopText() {
    if (containsOperator()){
      let pos = findOperatorIndex(topText);
      topText = topText.slice(0, pos) + " " + topText.slice(pos, topText.length);
      
    }

  }

  const operate = function(a, b, operator) {
    if (operator == "+") {
        return add(a,b);
    } else if (operator == "-") {
      return subtract(a, b);
    } else if (operator == 'x') {
      return multiply(a,b);
    } else if (operator == "÷" && b !== 0) {
      return divide(a,b);
    } else {
      return "error unsupported operation";
    }}
