/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var dict = {};
    for(var i=0; i<input.length; i++){
        if(input[i] in dict){
            dict[input[i]] += 1;
        }else{
            dict[input[i]] = 1;
        }
    }
    var lst = []
    var c = 0;
    for(var i in dict){
        if(i == dict[i]){
            lst[c] = parseInt(i);
            c++;
        }
    }
    console.log(lst);
    if(lst.length == 0){
        return -1;
    }
    var max = lst[0];
    for(var i=0; i<lst.length; i++){
        if(max < lst[i]){
            max = lst[i];
        }
    }
    return max;
};