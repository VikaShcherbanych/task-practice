class User {
    constructor (name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
   sayHi = () => {
     console.log('this sayHi', this)
   }

   sayBye (params) {
       console.log('this sayBye', this)
   }

   sayNo = function () {
    console.log('this sayNo', this)
   }
}

const user = new User()

const sayHi = user.sayHi;
user.sayBye();
user.sayNo();
sayHi();
console.log(User.prototype)
console.log(user.__proto__)
console.log(user)