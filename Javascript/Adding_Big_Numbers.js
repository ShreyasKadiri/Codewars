/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"


*/

function add(str1,str2){
let sum = "";  
let n1= str1.length;
let n2=str2.length;

if(n2>n1){
let temp=str2;
str2=str1;
str1=temp;
}

let carry = 0;  
let a;
let b;
let temp;
let digitSum;

for (let i = 0; i < str1.length; i++) {
a=parseInt(str1.charAt(str1.length - 1 - i));      
b=parseInt(str2.charAt(str2.length - 1 - i));      
b=(b)?b:0;                                    
temp=(carry+a+b).toString();                  
digitSum=temp.charAt(temp.length - 1);          
carry = parseInt(temp.substr(0, temp.length - 1));  
carry = (carry) ? carry : 0;                        
sum=(i===str1.length-1)?temp+sum:digitSum+sum; 
}    
return sum;     
}

