/*
In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its 
last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest
 character. [For Golang return rune]

All inputs will be lower case.

For example:
solve('a') = 'a'
solve('ab') = 'a'. Last occurrence is equal to first occurrence of each character. Return lexicographically lowest.
solve("axyzxyz") = 'x'


*/

class Solution {
    public static char solve(String s) {
        int max=0;
        char result=s.charAt(0);
      
        for (int i=0; i<s.length(); i++) {
            char ch=s.charAt(i);
            int diff=s.lastIndexOf(ch)-i;
            if(diff>max) 
            {
                max=diff;
                result=ch;
            }
            if(diff==max && ch<result)
              result=ch;
        }
        return result;
    }
}