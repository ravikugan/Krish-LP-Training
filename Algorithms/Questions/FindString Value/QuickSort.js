function partition(arr, left, right) {
    var pivot   = arr[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (arr[i].count < pivot.count) {
            i++;
        }
        if(arr[i].count === pivot.count){
            if(arr[i].word<pivot.word){
                i++;
                continue;
            }
        }
        while (arr[j].count > pivot.count) {
            j--;
        }
        if(arr[j].count === pivot.count){
            if(arr[j].word>pivot.word){
                j--;
                continue;
            }
        }
        if (i <= j) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right); 
        if (left < index - 1) { 
            quickSort(arr, left, index - 1);
        }
        if (index < right) { 
            quickSort(arr, index, right);
        }
    }
    return arr;
}



//export default {quickSort}; // ES6 implelmentation did not work. 
module.exports = {quickSort}; //This is the older version. The above is the ES6 version.