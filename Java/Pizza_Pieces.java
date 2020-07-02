/*
Description
In her trip to Italy, Elizabeth Gilbert made it her duty to eat perfect pizza. One day, she ordered one for dinner. And then some Italian 
friends appeared at her room.

The problem is that there were many people who ask for a piece of pizza at that moment. And she had a knife that only cuts straight.

Given a number K (K<=45000), help her get the maximum number of pieces possible (not necessarily of equal size) with K cuts. If K is a 
negative number, the result must be -1 (or Nothing in Haskell).

Examples
Pizza.maxPizza(0) == 1
Pizza.maxPizza(1) == 2
Pizza.maxPizza(3) == 7

*/

public class Pizza {

    public static int  maxPizza(int cut) {
          int result=0;
          if(cut<0) return -1;
          if(cut==0) return 1;
          int max=0;
          for(int i=1;i<=cut;i++){
          max+=i;
          }
          return 1+max;   
          }
}