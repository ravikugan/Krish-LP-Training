const findDigit = letter =>{
    let alpha = "abcdefghijklmnopqrstuvwxyz1234567890";
    let arr = alpha.split("");

    for(let i=0;i<arr.length;i++){
        if(arr[i]===letter)
            return i+1;
    }
}

const findDigit2 = letter =>{return letter.charCodeAt()} //This method will return ascii value as number for the char passed

const findValue = word =>{
  let value = 0;
  let arr = word.split("");

  for(let j=0;j<arr.length;j++)
  {
      let digit = findDigit2(arr[j]);
      value = value + digit;
  }

  return value;
}

const createArr = arr =>{
    let finArr = [];

    for(let k=0;k<arr.length;k++){
        let val = findValue(arr[k].toLowerCase());
        finArr.push({word:arr[k],count:val});
    }

    return finArr;
}

module.exports = {createArr};