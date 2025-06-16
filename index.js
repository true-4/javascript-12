// 2
// Создай объект animal с методом speak, который выводит в консоль "Я животное". Создай объект dog, чтобы он наследовал animal. Вызови dog.speak() — метод должен сработать.

const animal = {
  speak () {
    console.log('Я животное')
  }
}

const dog = {}
dog.__proto__ = animal
dog.speak()

// 3
// Создай функцию Person, которая принимает name.
// Добавь в Person.prototype метод sayHi, который выводит "Привет, меня зовут <name>".
// Создай экземпляр и вызови sayHi.

function Person () {}

Person.prototype.seyHi = function (name) {
  console.log(`Привет, меня зовут ${name}`)
}

const user = new Person()
user.seyHi('Vlad')

// 4
// Создай объект animal с canWalk = true.
// Создай объект rabbit, унаследованный от animal, и задай rabbit.canWalk = false.
// Проверь, что rabbit.canWalk — false, а animal.canWalk — true.

const animal2 = {
  canWalk: true,
}

const rabbit = Object.create(animal2)
rabbit.canWalk = false
console.log(animal2.canWalk)
console.log(rabbit.canWalk)