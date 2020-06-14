"""

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] --> 42 (i.e. sum of 23 and 19)
[99, 2, 2, 23, 19]  --> 122 (i.e. sum of 99 and 23)



"""

def largest_pair_sum(numbers): 
    numbers.sort()
    return numbers[len(numbers)-1]+numbers[len(numbers)-2]
