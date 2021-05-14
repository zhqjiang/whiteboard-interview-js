const partial =
  (fn, ...partialArgs) =>
  (...args) =>
    fn(...partialArgs, ...args)

const greet = (greeting, name) => greeting + ' ' + name + '!'
const greetHello = partial(greet, 'Hello')
console.log(greetHello('John')) // 'Hello John!

const add = (a, b, c, d) => a + b + c + d
const addTwoFirstly = partial(add, 1, 2)
console.log(addTwoFirstly(3, 4)) // 10
