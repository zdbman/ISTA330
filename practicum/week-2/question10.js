/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    var n = String(n);
    var arr = [];
    for(var i=0; i<n.length; i++){
        arr.push(parseInt(n[i]));
    }
    arr = arr.sort()
    return arr[arr.length-1] - arr[0];
};