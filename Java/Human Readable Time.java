/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.


*/


public class HumanReadableTime 
{
public static String makeReadable(int seconds) 
{
int hourToSeconds = 3600;
int minuteToSeconds = 60;
		
String hh =Integer.toString((seconds/hourToSeconds));
String mm=Integer.toString((seconds%hourToSeconds)/minuteToSeconds);
String ss=Integer.toString(seconds%minuteToSeconds);
if(hh.length() == 1) {
hh="0"+hh;}
      
if(mm.length()==1) {
mm="0"+mm;}
      
if(ss.length()==1) {
ss="0"+ss;}
		
return hh + ":" + mm + ":" + ss;
}
  }