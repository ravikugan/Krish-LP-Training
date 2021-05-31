const qs = require("./QuickSort");


let arr = [12,25,10,6,45,12,20];
//let arr2 = [10,2];
var sortArr = qs.quickSort(arr,0,arr.length-1);
console.log(sortArr);

if(sortArr[2]!=null)
    console.log('The third largest element is '+sortArr[2]);
else
    console.log('The array does not contain enough element to have a thir largest element');