const fs = require('fs')
const fun = require('./Functions');
const qs = require('./QuickSort');

const content = fs.readFileSync('./data.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
});

let word = content.split("\r\n");
let arr = fun.createArr(word);

//console.log(arr);

let sortArr = qs.quickSort(arr,0,arr.length-1);
console.log(sortArr);
