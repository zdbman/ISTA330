/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var dict = {};
    for(var i=0; i<input.length; i++){
        if(input[i] in dict){
            dict[input[i]] += 1;
        }else{
            dict[input[i]] = 1;
        }
    }
    console.log(dict);
    for(var i in dict){
        if(dict[i] > (input.length / 2)){
            return parseInt(i);
        }
    }
    return -1;
};