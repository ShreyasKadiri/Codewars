/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. 
Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

Examples:
Line.Tickets(new int[] {25, 25, 50}) // => YES 
Line.Tickets(new int[]{25, 100}) // => NO. Vasya will not have enough money to give change to 100 dollars
Line.Tickets(new int[] {25, 25, 50, 50, 100}) // => NO. Vasya will not have the right bills to give 75 dollars of change 
(you can't make two bills of 25 from one of 50)
*/


public class Line {
public static String Tickets(int[] peopleInLine)
{
int d25=0;
int d50=0;
for (int i=0;i<peopleInLine.length; i++) {
if(peopleInLine[i] == 25) 
d25++;
            
if (peopleInLine[i] == 50) {
d25--;
d50++;
}

if (peopleInLine[i] == 100) {
if (d50 > 0) {
d50--;
d25--;
}
else {
d25 -= 3;
}
}
if (d25 < 0) return "NO";
}
return "YES";  }
}