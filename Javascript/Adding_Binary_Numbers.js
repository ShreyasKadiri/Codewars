/*
##Task: You have to write a function add which takes two binary numbers as strings and returns their sum as a string.

##Note:

You are not allowed to convert binary to decimal & vice versa.
The sum should contain No leading zeroes.
##Examples:

add('111','10'); => '1001'
add('1101','101'); => '10010'
add('1101','10111') => '100100'


*/

let add = function(a,b){
  num1=a.split('').reverse();
  num2=b.split('').reverse();
  var result='';
  var t=0;
  
  while(num1.length||num2.length||t) 
  {
    t+=(~~num1.shift())+(~~num2.shift());
    let remainder=t%2;
    result=remainder+result;
    t=t>1;
  }
  return(+result)?result.replace(/^0+/,''):'0';
};