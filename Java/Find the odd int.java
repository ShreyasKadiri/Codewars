/*

Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.


*/


import java.util.*;
public class FindOdd {
	public static int findIt(int[] a) {
  	HashMap<Integer,Integer> map = new HashMap<Integer,Integer>();
    int ele=a[0];
    for(int i=0;i<a.length; i++){
    map.put(a[i], map.getOrDefault(a[i],0) +1);
    }
    
    for(Map.Entry<Integer,Integer> entry :map.entrySet()){
    if(entry.getValue()%2==1)
    ele=entry.getKey();
    }
    
    return ele;
  }
}
