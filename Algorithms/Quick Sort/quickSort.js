var arr = [10,20,5,7,91,25,12,45,null];
var arr2 = ['Kugan','Shade','Aimbot','Shenal','Shadhurshan','KLDMan','Sundar Ram','12 kld','Gaming Dood','25','who are you','zebra','dsad','zzzzzz'];

// function swap(items, leftIndex, rightIndex){
//     var temp = items[leftIndex];
//     items[leftIndex] = items[rightIndex];
//     items[rightIndex] = temp;
// }
function partition(arr, left, right) {
    var pivot   = arr[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
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


var sortArr = quickSort(arr,0,8);
console.log(sortArr);