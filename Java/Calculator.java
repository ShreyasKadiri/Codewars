/*
Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

Example:

Calculator.evaluate("2 / 2 + 3 * 4 - 6") // => 7
Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. 
Additions and subtractions have a lower priority and should also be performed left-to-right.

*/


import java.util.Stack;
public class Calculator {
  public static Double evaluate(String expression) {
    String[] subsections=expression.split(" ");
    Stack<Double>stack=new Stack<>();
    
    for (int i=0;i<subsections.length;i+=2) 
    {
      if (i==0||subsections[i-1].equals("+")) 
        stack.push(Double.valueOf(subsections[i]));
    
      
      else if(subsections[i-1].equals("-")) 
        stack.push(-Double.valueOf(subsections[i]));
      
      
      else if(subsections[i-1].equals("*")) 
        stack.push(stack.pop()*Double.valueOf(subsections[i]));
      
      
      else if (subsections[i-1].equals("/")) 
        stack.push(stack.pop()/Double.valueOf(subsections[i]));
    
    }
    
    double result=0.0;
    while(!stack.isEmpty()) 
    {
      result+=stack.pop();
    }
    return result;
}
}