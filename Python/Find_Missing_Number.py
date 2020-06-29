"""
This question is a variation on Arithmetic Progression Kata:
https://www.codewars.com/kata/find-the-missing-term-in-an-arithmetic-progression/cpp

The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here 
so that everyone could give it a go:
You are given an unsorted array containing all the integers from 0 to 100 inclusively. 
However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

"""
def missing_no(nums):
    sum=0
    total=0
    n=len(nums)
    sum=(n*(n+1))/2
    for i in range(0,100):
        total+=nums[i]
    return -total+sum