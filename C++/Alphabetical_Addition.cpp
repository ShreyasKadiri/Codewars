/*Your task is to add up letters to one letter.

The function will be given a vector of letters, each one being a letter (chars) to add. Return a char.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
add_letters({'a', 'b', 'c'}) = 'f'
add_letters({'a', 'b'}) = 'c'
add_letters({'z'}) = 'z'
add_letters({'z', 'a'}) = 'a'
add_letters({'y', 'c', 'b'}) = 'd' // notice the letters overflowing
add_letters({}) = 'z'
*/



#include <vector>
char add_letters(std::vector<char> letters){
int sumLetters = 0; 
    
for(char c : letters){
sumLetters += (c-'a'+1);}

if(sumLetters==0)
return 'z';
        
return (sumLetters-1)%26 +97;
}

