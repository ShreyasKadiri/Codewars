"""
Task
Let's say we have a positive integer, nn. You have to find the smallest possible positive integer that when multiplied by nn, becomes a perfect power of integer kk. 
A perfect power of kk is any positive integer that can be represented as a^ka k
 . For example if k = 2k=2, then 3636 is a perfect power of kk, but 2727 isn't.

Examples
n, k = 100, 3  return  10, #because 10*100 becomes 1000, and 1000 = 10**3
n, k = 36, 2   return   1, #because 36 is already a perfect square 6**2
n, k = 72, 4   return  18, #because 18*72 = 1296 = 6**4 

"""

import math
def mul_power(n, k):
    result=1
    for i in range(2,int(n**.5)+1):
        if not n%i:
            temp=0
            while not n%i:
                n//=i
                temp+=1
            result*=i**(-temp%k)
    if n>1:
        result*=n**(k-1)
    return result
