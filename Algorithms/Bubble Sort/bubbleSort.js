var arr = [10,20,5,7,91,25,12,45,null];
//var arr2 = ['Kugan','Shade','Aimbot','Shenal',15,'Shadhurshan','KLDMan','Sundar Ram','12 kld','Gaming Dood','25','who are you','zebra','dsad','zzzzzz',12,10,2.5];
//var arr3 = ['abc','12d',12,5,'kld',"add"];
var arr4 = [20,10,30,40,50];

const sorted = (array) =>{ // Function is an arrow function.
	let flag = false;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length-1; j++) {
			flag = false;
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				flag = true;
			}
			if(!flag)
				return array;
		}
	}
	return array;

}

function sortItems(array) {  // Function is older way.
	let flag = false;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length-1; j++) {
			flag = false;
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				flag = true;
			}
			if(!flag)
				return array;
		}
	}
	return array;
}

var sortArr = sorted(arr4);
console.log(sortArr);