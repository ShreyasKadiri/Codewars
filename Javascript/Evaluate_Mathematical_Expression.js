/*
Instructions
Given a mathematical expression as a string you must return the result as a number.

Numbers
Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

Operators
You need to support the following mathematical operators:

Multiplication *
Division / (as true division)
Addition +
Subtraction -
Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

Parentheses
You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

Whitespace
There may or may not be whitespace between numbers and operators.

An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. 
I.e., all of the following are valid expressions.

1-1    // 0
1 -1   // 0
1- 1   // 0
1 - 1  // 0
1- -1  // 2
1 - -1 // 2

6 + -(4)   // 2
6 + -( -4) // 10
And the following are invalid expressions

1 - - 1    // Invalid
1- - 1     // Invalid
6 + - (4)  // Invalid
6 + -(- 4) // Invalid
Validation
You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

NOTE: Both eval and Function are disabled. Same goes for String.match.

*/


var run=function (input) {
return expression(input);
};

var peek=function(input){
return input[0]||'';
};

var get=function(input) {
return input.shift();
};


var factor=function(input){	
function makeNumber(input){
var result='';
while(/[0-9\.]/.test(peek(input))){
result+=get(input);
}
return Number(result);
}
	
if(peek(input)==="-"){
get(input);
return -1*factor(input);
} 
  
else if(!isNaN(peek(input))){
return makeNumber(input);
}

else if(peek(input)==="(") {
get(input);  
var number=expression(input);
get(input);
return number;
}
};

var term=function(input)
{
var result=factor(input);
while(peek(input)=='*'||peek(input)=='/'){
if(get(input)=='*'){
result *= factor(input);
}
else{
result /= factor(input);
}
}
return result;
};

var expression=function(input){
var result=term(input);
while(peek(input)=='+'||peek(input)=='-'){
if(get(input)=='+'){
result+=term(input);
} 
else {
result-=term(input);
}
}
return result;
};

var calc=function(expression) {
var expressionToParse=expression.replace(/\s+/g, '').split('');
return run(expressionToParse);
}



