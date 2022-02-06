/*
Given an array of integers, 
return true if the array contains any duplicates.
Your function should return true 
if any value appears at least twice 
in the array, 
and it should return false 
if every element is distinct.
 
Example:
 input: [19,1,1,23,23,4,3,23,1,2]
 output: true
*/

var hasDuplicates = function(input) {
    for(var i=0; i<input.length; i++){
        for(var j=i+1; j<input.length; j++){
            if(input[i] == input[j]){
                return true;
            }
        }
    }
    return false;
};