/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    for(var i=0; i<input.length-1; i++){
        for(var j=i+1; j<input.length-1; j++){
            if(input[0] > input[input.length-1]){//decreasing
                if(input[i] <input[j]){
                    return false;
                }
            }
            else if(input[0] < input[input.length-1]){//increasing
                console.log(input[i], input[j]);
                if(input[i] > input[j]){
                    return false;
                }
            }
        }
    }
    return true;
};