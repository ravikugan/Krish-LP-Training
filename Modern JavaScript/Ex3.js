let arr1 = [12,25,10,6,45,12,20];
let arr2 = [85,11,65,20,14,12,32];

const qs = require("./QuickSort");
var sortArr = qs.quickSort(arr,0,arr.length-1);
console.log(sortArr);

const {quickSort} = require("./QuickSort")
var sortArr2 = quickSort(arr2,0,arr.length-1);
console.log(sortArr2);






const obj={
    x:10,
    y:20,
    z:30
}

const {x,z}=obj

const f1=({x})=>{
    return x*x
}

const f2=({x},{y=3}={})=>{
    return x*y
}

console.log(f2(obj))
console.log(f2(obj,{y:5}))



// let num1 = [10,20,30,40,50]
// let num2 = [5,10,15,20,25]

// let newNum1 = num1
// newNum1.push(60)

// console.log(num1)
// console.log(newNum1)

// let [n1,,n3]=[10,20,30,40]

// console.log(n1)

// console.log(n3," Second number is skipped here")

// let [a1,...a2]=[10,20,30,40]
// console.log(a1)

// console.log(a2,' The rest of the values are stored in a seperate array')


