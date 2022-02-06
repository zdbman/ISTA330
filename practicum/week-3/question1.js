/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        var temp = [];
        var max = input[0];
        for(var i in input){
                if(max < input[i]){
                        max = input[i];
                }
        }
        var max2 = input[0]
        for(var i in input){
                if(max2 < input[i] && input[i] != max){
                        max2 = input[i];
                }
        }
        if(max > (max2 * 2)){
                return true;
        }
        return false;
};