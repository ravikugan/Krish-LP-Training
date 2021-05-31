const fs = require('fs')
const fun = require('./Functions');
const qs = require('./QuickSort');
const bs = require('./BubbleSort');

const content = fs.readFileSync('./data.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
});

let word = content.split("\r\n");
let arr = fun.createArr(word);

let sortArr = qs.quickSort(arr,0,arr.length-1);
console.log(sortArr);