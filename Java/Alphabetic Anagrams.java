import java.math.BigInteger;
import java.math.BigDecimal;
import java.math.RoundingMode;

public class Anagrams {
  public static BigInteger listPosition(String word) {
        BigDecimal[] result=new BigDecimal[word.length()];
        String s= word.toLowerCase();
        BigInteger rank= new BigInteger("0");
        for(int i=0;i<s.length();i++){
            int crank=getPos(s.charAt(i));
            int[] freq=new int[27];
            int numerator=0;
            BigDecimal denominator=new BigDecimal("1");
            for(int j=i;j<s.length();j++){
                freq[getPos(s.charAt(j))]++;
                if(getPos(s.charAt(j))<crank){
                    numerator++;
                }
            }
            for(int d: freq){
                if(d>1)
                    denominator=denominator.multiply(fact(d));
            }
            result[i]=BigDecimal.valueOf(numerator).divide(denominator,26, RoundingMode.CEILING);
        }
        for(int i=0;i<result.length;i++){
            result[i]=result[i].multiply(fact((result.length-1)-i));
        }
        for(BigDecimal i:result){
            rank=rank.add(i.toBigInteger());
        }

        return rank.add(BigInteger.ONE);
    }

    private static int getPos(char c){
        return c-96;
    }

    private static BigDecimal fact(int num){
        BigDecimal fact=new BigDecimal("1");
        for(int i=num;i>0;i--)
            fact=fact.multiply(BigDecimal.valueOf(i));
        return fact;
    }
}
