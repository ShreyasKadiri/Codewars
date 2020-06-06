"""
Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Example
is_prime(1)  /* false */
is_prime(2)  /* true  */
is_prime(-1) /* false */
Assumptions
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
There are no fancy optimizations required, but still the most trivial solutions might time out. Try to find a solution 
which does not loop all the way up to n.

"""
def is_prime(n) : 
      if (n <= 1): 
        return False
      if (n<=3): 
        return True
      if (n % 2 == 0 or n % 3 == 0) : 
        return False
      i=5
      while(i*i<=n): 
        if (n%i==0 or n%(i+2)==0) : 
            return False
        i=i+6
      return True
