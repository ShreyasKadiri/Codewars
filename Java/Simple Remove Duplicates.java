/*
In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

solve [3, 4, 4, 3, 6, 3]-- => [4, 6, 3]
-- Remove the 3's at indices 0 and 3
-- followed by removing a 4 at index 1
More examples can be found in the test cases.

*/

import java.util.*; 
class Solution{
    public static int [] solve(int [] arr){
        ArrayList<Integer> temp = new ArrayList<Integer>();
        for(int i=arr.length-1; i>=0; i--){
            if(!temp.contains(arr[i]))
              temp.add(0,arr[i]);
        }
        int[] result = new int[temp.size()];
        for(int i=0; i<temp.size(); i++){
          result[i]=temp.get(i);
        }
        return result;
    }
}