//var arr = [10,20,5,7,91,25,12,45,null];
var arr2 = ['Kugan','Shade','Aimbot','Shenal','Shadhurshan','KLDMan','Sundar Ram','12 kld','Gaming Dood','25','who are you','zebra','dsad','zzzzzz'];
//var arr3 = ['abc','12d',12,5,'kld',"add"];

const merge = (left, right)=> {
    let arr = []
    // Break out of loop if any one of the array gets empty
    while (left.length && right.length) {//When count becomes 0 it will become false
        // Pick the smaller among the smallest element of left and right sub arrays 
        if (left[0] < right[0]) {
            arr.push(left.shift())  //.shift() acts like pop and removes the first element from the array and adds to arr.
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
    // Spread Operator will sspread the array elements into individual values
    //So the return statement will look like this [1,2,3,4,5]
}

const mergeSort = array => {
    const half = array.length / 2
    
    // Base case or terminating case
    if(array.length < 2){
      return array 
    }
    
    const left = array.splice(0, half)
    return merge(mergeSort(left),mergeSort(array))
  }

var sortArr = mergeSort(arr2);
console.log(sortArr);


//In Javascript 0 is false and all other numbers are true;