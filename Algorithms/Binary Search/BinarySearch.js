var arr = [5,10,15,20,25,30,35,40];

const  binarySearch = (sortedArray, key)=>{
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
            // found the key
            return true;
        } else if (sortedArray[middle] < key) {
            // Search the right
            start = middle + 1;
        } else {
            // Search the left
            end = middle - 1;
        }
    }
	// key wasn't found
    //Can have a return statement but is not necessary in js
}

var value = binarySearch(arr,50);
if(value)
{
    console.log('The value is inside the array');
}
else
{
    console.log('The value is not inside the array');
}