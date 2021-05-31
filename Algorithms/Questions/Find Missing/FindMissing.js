const qs = require("./QuickSort");
let arr = [1,2,3,4,6,7,8,9,10,11,12];
let arr2 = [1,2,3,4,5,6,7,8,9,10,11,12];

const findNum = arr =>{
    for(i = 0;i<arr.length-1;i++){
        if(arr[i+1]===arr[i]+1)
            continue;
        arr.push(arr[i]+1);
        return arr[i]+1;
    }
    return null;
}

let num = findNum(arr2);
if(num!=null){
    console.log(num+" is the missing number");
    qs.quickSort(arr2,0,arr.length-1);
    console.log("The correct sequence is\n"+arr2);
}else{
    console.log("The sequence is in the correct order");
}

