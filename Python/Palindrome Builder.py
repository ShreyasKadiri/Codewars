"""
Task
Given a string, add the fewest number of characters possible from the front or back to make it a palindrome.

Example
For the input cdcab, the output should be bacdcab

Input/Output
Input is a string consisting of lowercase latin letters with length 3 <= str.length <= 10

The output is a palindrome string satisfying the task.

For s = ab either solution (aba or bab) will be accepted.

"""
def build_palindrome(s):
    temp=s[::-1]
    length=0
    for i in range(1,len(s)+1):
        if temp[:i]==s[-i:]:
            length=i
        if s[:i]==temp[-i:]:
            l=i
    if length>l:
        return s[:-length]+temp
    return temp[:-l]+s