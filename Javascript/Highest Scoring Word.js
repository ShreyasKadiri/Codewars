/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.


*/

function high(x){
var words=x.split(' '),maxnum=0, res = '';
  
for(let i=0;i<words.length;i++){
var s=words[i],
val=0;
    
for(let j=0;j<s.length;j++){
val += (s.charCodeAt(j) - 96);
}

if(val>maxnum){
maxnum=val;
res=s;
    }
  }
  return res;
}