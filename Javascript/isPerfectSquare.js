/*

Calculate whether a given 32 bit int n is created by the squaring of another int.

You can assume that n will be a whole number greater than 0.

*/

function isPerfectSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}