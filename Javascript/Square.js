/*Square
Given an array of positive integers, find if the sum of the integers in the array is a perfect square. If it is a perfect square, return 
the square root, otherwise return the sum. If an empty array is passed, return 0. To improve your problem solving experience, use the suggested 
functions to solve the problem.*/


function squareRoot(numbers){
if (numbers.length ==0) return 0;

let sum=0;
for(let i=0; i<numbers.length; i++){
sum+=numbers[i];
}

if(Math.sqrt(sum) % 1 === 0)
return Math.sqrt(sum);
else
return sum;
}

