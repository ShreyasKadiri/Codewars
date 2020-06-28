/*
One is the loneliest number
Task
The range of vision of a digit is its own value. 1 can see one digit to the left and one digit to the right,2 can see two digits, and so on.

Thus, the loneliness of a digit N is the sum of the digits which it can see.

Given a non-negative integer, your funtion must determine if there's at least one digit 1 in this integer such that its loneliness value 
is minimal.


Example
number = 34315
digit	can see on the left	can see on the right	loneliness
3	-	431	4 + 3 + 1 = 8
4	3	315	3 + 3 + 1 + 5 = 12
3	34	15	3 + 4 + 1 + 5 = 13
1	3	5	3 + 5 = 8
5	3431	-	3 + 4 + 3 + 1 = 11
Is there a 1 for which the loneliness is minimal? Yes.
*/



function loneliest(number) {
var array=number.toString().split('').map(i=>+i)
var result=[]
var single=[]

for(var i=0;i<array.length;i++){
var value=array[i] 


if(i-value<0)
var start=0    
else 
var start=i-parseInt(value)
      
if(i+value>array.length)
var end=array.length
else 
var end=i+parseInt(value)+1

var temp=array.slice(start,end)
var total=temp.reduce((a,b)=>a+b)-value

if(value!=1)
result.push(total)
else 
single.push(total)
}    
  
if(single.length==0)
return false
  
else if(Math.min(...result)>=Math.min(...single))
return true
else 
return false
  }
