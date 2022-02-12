/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    var count = 0;
    var lst = [0,1];
    for(var i=2; i<=n; i++){
        lst[i] = lst[i-2] + lst[i-1]
    }
    //console.log(lst);
    return lst[lst.length-1];
};