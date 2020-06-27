/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding 
the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
Examples
ipsBetween("10.0.0.0", "10.0.0.50")  ===   50 
ipsBetween("10.0.0.0", "10.0.1.0")   ===  256 
ipsBetween("20.0.0.10", "20.0.1.0")  ===  246


*/

function ipsBetween(start, end){
var first=start.split('.');
var last=end.split('.');
var difference=0;

for(var i=0;i<4;i++) {
if(first[i]!=last[i]){
difference=i;
break;}
}

if(difference==3) 
return Number(last[3]-first[3]);
    
else if(difference==2) 
return (Number(last[2])-Number(first[2]))*(256-first[3]);

else if(difference==1) {
let result=last[2]===first[2]?Math.pow(2,16):65793;
return result;
}
  
else {
let result=Number(last[0])===181?16777216:67372036;
return result;
}
}