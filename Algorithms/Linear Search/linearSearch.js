var arr = [10,20,5,7,91,25,12,45,null];
var arr2 = ['Kugan','Shade','Aimbot','Shenal','Shadhurshan','KLDMan','Sundar Ram','12 kld','Gaming Dood','25','who are you','zebra','dsad','zzzzzz'];

function linearSearch(arr, key){
    for(let i = 0; i < arr.
        length; i++){
        if(arr[i] === key){
            return true;
        }
    }
    return false;
}

function globalLinearSearch(arr, key){
    let results = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === key){
            results.push(i)
        }
    }
    // If results array is empty, return -1
    if(!results){
        return -1
    }

    return results
}

//Source: https://stackabuse.com/linear-search-in-javascript/



var element = linearSearch(arr,7);

if(element)
{
    console.log("Value is inside the array");
}
else
{
    console.log("Value is not inside the array");
}