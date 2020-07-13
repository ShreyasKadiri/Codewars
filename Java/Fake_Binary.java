/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. 
Return the resulting string.
*/

public class FakeBinary {
    public static String fakeBin(String numberString) {
        String result="";
        for(char c:numberString.toCharArray()) {
            result+=(c<'5') ? "0" : "1";
        }
        return result;
    }
}