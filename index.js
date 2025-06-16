// 2
const animal = {
  speak () {
    console.log('Я животное')
  }
}

const dog = {}
dog.__proto__ = animal
dog.speak()