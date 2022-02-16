

"use strict";
var num = [-3,-2,-1,0,1,2,3,4,5,6]
var a = 2

function exponentiate(x, y) {
    var newNum = [];
 for( var index in num){
    newNum.push(x[index]**y)
}
    return newNum    
}

var res = exponentiate(num,a)
console.log(res)
