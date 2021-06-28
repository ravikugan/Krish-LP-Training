function checkName(name){
    let temp="Kg"
    return new Promise((resolve,reject)=>{
        if(temp===name){
            setTimeout(() => resolve("Promise is resolved after 2 seconds"), 2000);
        }else{
            reject("Promise is rejected")
        }
    })

}

function check(){
    let response
    response = await checkName("Kg")

    console.log("The response is",response)
}

check()


// checkName("Kg")
// .then(msg=>console.log(msg))
// .catch(error=>console.log(error))
// .finally(()=>console.log("This will work regradless of the ouput."))

// class Student{
//     constructor(name){
//         this.name=name
//     }
//     info=()=>console.log(this.name," is a strudent")  
// }

// class Prefect extends Student{
//     constructor(name,section){
//         super(name)
//         this.section= section
//     }

//     info=()=>console.log(this.name," is a student who maintains ",this.section," section")
// }

// let st1 = new Student("Kumar")
// let st2= new Prefect("Ramesh","Primary")

// st1.info()
// st2.info()

// st1.info=()=>console.log("Parent method has been overRiden")

// st1.info()






// const obj={
//     name:"Vehicle",
//     value:{
//         price:10000,
//         usage:"4 years"
//     }
// }

// console.log(obj)
// Object.freeze(obj)
// Object.freeze(obj.value)

// obj.name = "Building"
// obj.value.price=1000

// console.log(obj)