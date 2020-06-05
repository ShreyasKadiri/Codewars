/*
Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

  sum_digits(10)  // Returns 1
  sum_digits(99)  // Returns 18
  sum_digits(-32) // Returns 5
*/


int sum_digits(int n) {
 if (n<0)
 n=n*-1;
 int s=0;
 while(n!=0){
 s+=n%10;
 n/=10;
 }
 
 return s;
}
