/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    var min = input[0] - input[1];
    var count = 0;
    var lst = [];
    for(var i=0; i<input.length; i++){
        for(var j=i+1; j<input.length; j++){
            if(Math.abs(input[i]-input[j]) <= min){
                min = Math.abs(input[i]-input[j]);
                lst[count] = [input[i], input[j]];
                count += 1;
            }
            if(Math.abs(input[j]-input[i]) <= min){
                min = Math.abs(input[j]-input[i]);
                lst[count] = [input[j], input[i]];
                count += 1;
            }
        }
    }
    var retlst = [];
    var count = 0
    for(var i=0; i<lst.length; i++){
        if(Math.abs(lst[i][0] - lst[i][1]) == min && lst[i][0] < lst[i][1]){
            retlst[count] = lst[i];
            count++;
        }
    }
    return retlst;
};