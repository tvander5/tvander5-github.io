/*
    Welcome to the JS Data Types exercise! Follow the instructions for each requirement.
    To check your answers, open the index.html file in your browser. Follow the instructions
    there to see your results. The training staff may use additional test cases when grading
    your work.

    Write your answers in the spaces under each question. If a variable is already declared,
    you should modify its value to meet the requirement.
    
    Don't forget to save this file and refresh your browser before running the tests again!
*/

// 1.   Declare a variable named "tree". Use a keyword that allows reassignment,
//      but not re-declaration
let tree;

// 2.   Assign a value of 'Oak' to the tree variable
tree = "Oak";

// 3.   Initialize a constant variable named "alaskaStateFlower",
//      and assign it the value of 'Forget-me-not'
const alaskaStateFlower = "Forget-me-not";

// 4.   Initialize a variable named "numberOfChoice" with any number
let numberOfChoice = 18;

// 5.   Initialize a variable named "binaryChoice" with any boolean
let binaryChoice = false;

// 6.   Assign defaultVariableValue to have the string representation
//      of JavaScript's default variable value
const defaultVariableValue = "undefined";

// 7.   Assign lackOfValue to be the data type that a developer should
//      assign when a value is not known ahead of time. Your answer should
//      not be a string
let lackOfValue = null;

// 8.   What would happen if you tried to re-assign alaskaStateFlower to
//      'Magnolia'? Uncomment the variable that is correct
// let reassignmentResult = 'alaskaStateFlower becomes Magnolia';
// let reassignmentResult = 'Nothing happens, and alaskaStateFlower is still Forget-me-not';
let reassignmentResult = 'An error occurs, since you can\'t reassign a variable that was declared with const';

// 9.   Create a constant variable named operandTwo with any number
const operandTwo = 18;

// 10.  Create a variable named "product" and assign it to the value of 
//      the "numberOfChoice" variable times the "operandTwo" variable
let product = numberOfChoice * operandTwo;

// 11.  Create a variable named "productOutput" and give it a string value with
//      the following sentence: "The product is: <answer_here>", ensuring that <answer_here> is your product variable
let productOutput = "The product is: " + product;


///////////////////////
// TYPE CONVERSIONS! //
// In the following section, you should identify the data type that will result when 
// the expression is evaluated. Assign variables to be one of the following values:
// ['string', 'number', 'NaN']
//  Make sure to include quotes in your answer.
///////////////////////

// 12.  3.14159 + 6.022
const dataType12 = 'number';

// 13.  -10 + '5'
const dataType13 = 'string';

// 14.  '-10' + 5
const dataType14 = 'string';

// 15.  -10 - '5'
const dataType15 = 'number';

// 16. '-10' * 5
const dataType16 = 'number';

// 17.  -10 / '5'
const dataType17 = 'number';

// 18.  -10 * 'a1'
const dataType18 = 'NaN';