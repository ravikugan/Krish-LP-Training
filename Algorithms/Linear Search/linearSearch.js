var arr = [10,20,5,7,91,25,12,45,null];
var arr2 = ['Kugan','Shade','Aimbot','Shenal','Shadhurshan','KLDMan','Sundar Ram','12 kld','Gaming Dood','25','who are you','zebra','dsad','zzzzzz'];

const linearSearch = (arr, key)=>{
    for(let i = 0; i < arr.length; i++){
        if(arr[i].toLowerCase() === key.toLowerCase()){
            return true;
        }
    }
    return false;
}

var element = linearSearch(arr2,"kugan123");

if(element)
{
    console.log("Value is inside the array");
}
else
{
    console.log("Value is not inside the array");
}