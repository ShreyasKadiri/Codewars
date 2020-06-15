"""
For a given list [x1, x2, x3, ..., xn] compute the last (decimal) digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

E. g.,

last_digit([3, 4, 2]) == 1
because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than 369 millions of digits. lastDigit has to deal with such numbers 
efficiently.
Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.
This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.
"""

def last_digit(lst):
    res=1
    for i in reversed(lst):
        res=i **(res if res<4 else res%4 +4)
    return res%10
