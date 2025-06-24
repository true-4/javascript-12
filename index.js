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

function Person (name) { return this.name = name}

Person.prototype.sayHi = function () {
  console.log(`Привет, меня зовут ${this.name}`)
}

const user = new Person('Vlad')
user.sayHi()

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

// 5
// Создай объект parent с полем a = 1. Создай объект child, унаследованный от parent, с полем b = 2. Пройди циклом for...in по child и выведи только его собственные поля.

const parent = {
  a: 1,
}

const child = Object.create(parent)
child.b = 2

for (const el in child) {
  console.log(child)
}

// 6
// Создай объект vehicle с методом drive. Создай пустой объект car. Сделай vehicle прототипом car через Object.setPrototypeOf. Вызови car.drive().
const vehicle = {
  drive() {console.log('Drive')} 
}
const car = {}

Object.setPrototypeOf(car, vehicle)
car.drive()

// 7
// Создай объект user1 с методом sayHi. Создай user2, унаследованный от user1. Удалите метод sayHi из user1. Что произойдет при вызове user2.sayHi()?
const user1 = {
  sayHi1() {console.log('Hi')}
}
const user2 = {}

Object.setPrototypeOf(user2, user1)
// delete user1.seyHi1
user2.sayHi1() // ошибка Uncaught TypeError: user2.seyHi1 is not a function так как удалили метод из протатипа и его нет

// 8
// Создай объекты grandParent, parent, child. Пусть каждый наследует от предыдущего. У grandParent есть метод sayHello. Вызови child.sayHello() — он должен работать.

const grandParent = {
  sayHello() {
    console.log('Hello')
  }
}
const parenT = {}
const chilD = {}

Object.setPrototypeOf(parenT, grandParent)
Object.setPrototypeOf(chilD, parenT)

chilD.sayHello()

// 9
// Создай объект a с методом ping. Создай объект b. Сделай a прототипом для b через b.__proto__ = a. Вызови b.ping().
const a = {
  ping() {
    console.log('ping')
  }
}

const b = {}
b.__proto__ = a
b.ping()

// 10-11
// Создай объект list. Установи ему прототип Array.prototype. Вызови list.push(1) и выведи list.length.
const list = Object.create(Array.prototype)
list.push(1)
console.log(list.length)

// 12
// Напиши функцию myInstanceOf(obj, Constructor), которая проверяет, является ли объект экземпляром конструктора, аналогично оператору instanceof, но без его использования.
// Примеры: myInstanceOf([], Array) должно вернуть true, myInstanceOf({}, Array) должно вернуть false.

function myInstanceOf(obj, Constructor) {
  let proto = Constructor.prototype // Получаем прототип конструктора
  while (obj !== null) { // Бесконечный цикл для проверки всей цепочки наследования условие выхода null
    if (Object.getPrototypeOf(obj) === proto) { // Если полученый прототип объекта равен прототипу конструктора вернёт true
      return true
    }
    obj = Object.getPrototypeOf(obj) // Переходим к прототипу объекта
  }
  return false // Если не нашли совпадений прототипов дойдя до null
}

console.log(myInstanceOf([], Array))
console.log(myInstanceOf({}, Array))

// 13
// Написать свой собственный метод myMap, чтобы он работал также как и встроенный метод Array.prototype.map.
Array.prototype.myMap = function (cb) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i], i))
  }
  return res
}

const numbers = [1, 2, 3, 5] 
console.log(numbers.myMap(item => item ** 2))

// 14
// Написать свой собственный метод myForEach, чтобы он работал также как и встроенный метод Array.prototype.forEach.
