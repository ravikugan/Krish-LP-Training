const findDigit = letter =>{
    let alpha = "abcdefghijklmnopqrstuvwxyz1234567890";
    let arr = alpha.split("");

    for(let i=0;i<arr.length;i++){
        if(arr[i]===letter)
            return i+1;
    }
}

const findDigit2 = letter =>{return letter.charCodeAt()}

const findValue = word =>{
  let value = 0;
  let arr = word.split("");
  console.log("The splitted array is "+arr);

  for(let j=0;j<arr.length;j++)
  {
      let digit = findDigit2(arr[j]);
      value = value + digit;
  }

  return value;
}

const createArr = arr =>{
    let finArr=[{word:"",count:0}];
    
    for(let k=0;k<arr.length;k++){
        let val = findValue(arr[k]);
        console.log(val);
        finArr.push({word:arr[k],count:val});
    }

    finArr.splice(0,1);
    return finArr;
}

//let arr = ['kugan','sanith','yz','abc'];
//let arr2 = createArr(arr);

//console.log(arr2);

module.exports = {createArr};