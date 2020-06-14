/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the 
line should also be stripped out.

Example:
Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"



*/

function solution(input, markers) {
    let array = input.split('\n');
    let mark;
    for (let i in array) {
        if (array[i].indexOf(markers[0]) !== -1) mark = array[i].indexOf(markers[0])
        else if (array[i].indexOf(markers[1]) !== -1) mark = array[i].indexOf(markers[1])
        else continue;
        array[i] = array[i].slice(0, mark - 1);
    }
    return array.join('\n');
};







