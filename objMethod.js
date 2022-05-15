let name = 'Alisa';
const obj = {
  name: 'John',
  getArrowName: () => `Hello, ${this?.name}`,
  getName: function() { return `Hello, ${this.name}`}
};

console.log(obj.getArrowName()); //"Hello, Alisa"
console.log(obj.getName()); //"Hello, John"

// const options = {
//     responce: 'This is responce',
//     error: 'This is error',
//     success () {
//         return console.log(this.response)
//     },
//     error: () => console.log(this.error),
// };
 
// options.error()
// options.success()

// class User {
//     constructor (name, lastName) {
//         this.name = name;
//         this.lastName = lastName;
//     }
//    sayHi = () => {
//      () => console.log('this sayHi', this)
//    }

//    sayBye () {
//        function f() {return console.log('this sayBye', this)}
//    }
// }

// const user = new User('Ann', 'Wood')
// console.log(user.sayHi())
// console.log(user.sayBye())