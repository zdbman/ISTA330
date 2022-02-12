/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n){
  var lst = [[]]
  if(n == 0){
    return lst;
  }else{
    lst = [[1]];
  }
  for(var i=1; i<n; i++){
    lst[i] = [];
    for(var j=0; j<lst[i-1].length+1; j++){
      
    }
  }
  
  return lst;
};