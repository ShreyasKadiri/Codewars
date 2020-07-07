"""
Compute the complex logarithm at any given complex number, accurate to at least 1 in 10^-12. The imaginary part should be inside the interval (−π, π] (i.e if the 
imaginary part is exactly π, keep it as is).

Note: You shouldn't try to compute the value of this function at the poles. Please return null/NULL/nil/None (C#: throw an ArgumentException, 
Java: throw an ArithmeticException) if this happens.

"""

import cmath
def log(real, imag):
    #your code here, return using the [real, imag] format; return None at the poles; math module already imported
    if real==0:
        return None
    res=cmath.log(complex(real,imag))
    return [res.real,res.imag]