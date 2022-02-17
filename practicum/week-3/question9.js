/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var count = 0;
    //console.log(n.toString());
    var lst = [];
    var c = 0;
    for(var i=1; i<=n; i++){
        for(var j=10; j<=n; j++){
            var test = j.toString();
            //console.log(test);
            var num = 0;
            for(var k=0; k<test.length; k++){
                num += parseInt(test[k]);
            }
            if(num === i){
                //console.log(i, num);
                count += 1;
                lst[c] = i;
                c++;
            }
        }
    }
    console.log(lst)
    var c4 = 0;
    for(var i=0; i<lst.length; i++){
        var t = true;
        for(var j=i+1; j<lst.length; j++){
            if(lst[i] == lst[j]){
                t = false;
            }
        }
        if(t){
            c4+=1;
        }
    }
    return c4;
};