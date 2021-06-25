const obj={
    name:"Vehicle",
    value:{
        price:10000,
        usage:"4 years"
    }
}

console.log(obj)
Object.freeze(obj)
Object.freeze(obj.value)

obj.name = "Building"
obj.value.price=1000

console.log(obj)