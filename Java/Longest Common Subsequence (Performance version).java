/*
Longest Common Subsequence (Performance version)
from Wikipedia: The longest common subsequence (LCS) problem is the problem of finding the longest subsequence common to all sequences in a set 
of sequences.It differs from problems of finding common substrings: unlike substrings, subsequences are not required to occupy consecutive
 positions within the original sequences.

Task
Write a function lcs that accepts two strings and returns their longest common subsequence as a string. Performance matters.

Examples
lcs( "abcdef", "abc" ) => "abc"
lcs( "abcdef", "acf" ) => "acf"
lcs( "132535365", "123456789" ) => "12356"
lcs( "abcdefghijklmnopq", "apcdefghijklmnobq" ) => "acdefghijklmnoq"
Testing
This is a performance version of xDranik's kata of the same name. This kata, however, has much more full and heavy testing. 
Intermediate random tests have string arguments of 20 characters; hard random tests 40 characters; extreme 60 characters (characters are
 chosen out of 36 different ones).

Notes
The subsequences of "abc" are "", "a", "b", "c", "ab", "ac", "bc", "abc". "" is a valid subsequence in this kata, and a possible return value.
All inputs will be valid.
Two strings may have more than one longest common subsequence. When this occurs, return any of them.

lcs( string0, string1 ) === lcs( string1, string0 )

*/

class Lcs {

static String lcs(String a,String b) {
int n1=a.length();
int n2=b.length();
return lcs(a,b,n1,n2);
}

static String lcs(String x,String y,int m,int n) {
int[][] longest=new int[m+1][n+1];
for(int i=0;i<=m;i++) {
for(int j=0;j<=n;j++) {
if(i==0||j==0)
longest[i][j]=0;
else if(x.charAt(i-1)==y.charAt(j-1))
longest[i][j]=longest[i-1][j-1]+1;
else
longest[i][j]=Math.max(longest[i-1][j],longest[i][j-1]);
}
}

int index=longest[m][n];
int temp=index;
char[] lcs=new char[index+1];
lcs[index]='\0';

int i=m;
int j=n;
while(i>0&&j>0) 
{
if(x.charAt(i-1)==y.charAt(j-1)) {
lcs[index - 1] = x.charAt(i-1);
i--;
j--;
index--;
} 
else if(longest[i-1][j]>longest[i][j-1])
i--;
else
j--;
}
return getString(temp,lcs);
}


public static String getString(int temp,char[] lcs)
{
StringBuilder sb=new StringBuilder("");
for(int k=0;k<=temp;k++) {
sb.append(lcs[k]);
}
return sb.deleteCharAt(temp).toString();
}
}