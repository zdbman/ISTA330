
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input){
        var dict = {}
        for(var i=0; i<input.length; i++){
                for(var j=1; j<=input.length; j++){
                        var lst = input.slice(i, j);
                        var count = 0;
                        for(var k=0; k<lst.length; k++){
                                count += lst[k];
                        }
                        dict[count] = lst;
                }
        }
        console.log(dict);
        var max = 0;
        for(var i in dict){
                if(parseInt(max) < i){
                        max = i;
                }
        }
        return parseInt(max);
};
