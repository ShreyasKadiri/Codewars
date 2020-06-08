/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram "Dermatoglyphics" == true
isIsogram "aba" == false
isIsogram "moOse" == false -- ignore letter case

*/


import java.util.*;

public class isogram {
public static boolean  isIsogram(String str) {
HashMap<Character,Integer> map = new HashMap<Character,Integer>();

for(char c:str.toLowerCase().toCharArray()){
map.put(c, map.getOrDefault(c,0)+1);
}

for(Map.Entry<Character,Integer> entry: map.entrySet()){
if(entry.getValue()>1){
return false;
}
}
return true;
} 
}