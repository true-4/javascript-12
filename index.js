// 2
const animal = {
  speak () {
    console.log('Я животное')
  }
}

const dog = {}
dog.__proto__ = animal
dog.speak()

// 3
function Person () {}

Person.prototype.seyHi = function (name) {
  console.log(`Привет, меня зовут ${name}`)
}

const user = new Person()
user.seyHi('Vlad')