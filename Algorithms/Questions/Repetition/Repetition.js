const fn = require("./Functions");

let sentence = 'my name is kugan';
let arr = sentence.split("");

//let arr2 = [{word:'m',count:5}]


fn.remArr(arr);
console.log(arr);
let finArr = fn.findCount(arr);
console.log(finArr);