const obj={
    name:"Usman",
    occupation:"fighter"
}
let temp=` ${obj.name} is a ${obj.occupation}`
console.log(temp)
console.log(` ${obj.name} is a ${obj.occupation}`)





// const obj={
//     k:0,
//     f1: function(){
//         j:0
//         console.log("This of f1 is ",this)
//     },
//     f2: ()=>{
//         m:0
//         console.log("This if f2 is ",this)
//     }
// }

// obj.f1()
//obj.f2()


// var bunny = {
//     name: 'Usagi',
//     showName: function() {
//       console.log(this.name);
//     }
//   };
  
//   bunny.showName(); // Usagi

//   var bunny2 = {
//     name: 'Usagi',
//     tasks: ['transform', 'eat cake', 'blow kisses'],
//     showTasks: function() {
//       this.tasks.forEach(function(task) {
//         console.log(this.name + " wants to " + task);
//       });
//     }
//   };
  
//   bunny2.showTasks();