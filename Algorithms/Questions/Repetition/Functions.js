let sent = 'my name is kugan';
let arr1 = sent.split("");

//Function to remove spcaes from the array
const remArr = arr =>{
    for(i =0;i<arr.length;i++){
        if(arr[i]===" ")
            arr.splice(i,1);
    }
}

const findCount = arr =>{
    let countArr=[{word:"",count:0}];
    let count = 1;
    for(i=0;i<arr.length;i++){
        if(checkWord(countArr,arr[i])){
            count = 1;
            continue;
        }
        for(j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j])
                count++;
        }
        countArr.push({word:arr[i],count:count});
        count = 1;
    }
    countArr.splice(0,1);
    return countArr;
}

const checkWord = (arr,i) =>{
 
    for(j=0;j<arr.length;j++){
        if(arr[j].word === i)
            return true;
    }
    return false;
}

module.exports = {remArr,findCount};
