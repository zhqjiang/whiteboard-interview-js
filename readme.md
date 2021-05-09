# whiteboard-interview-js

Some interviews may ask you to write code on whiteboard or paper, this repository includes some common handwriting questions(JavaScript) and their solutions(not best practice).

## 1. [custom iterator](./src/01_custom_iterator.js)

Requiremetns: write a class that implements iterator, which returns from 1 to given counts. Ensure the iterator of an instance can be used multiple times. Don't use `for`, `while`, `foreach`, `yield`.

About: `Iterator`, `Symbol`, `Class`

Code:

```js
class Counter {
  // write your code
}

let counter = new Conter(3)
for (let i of counter) {
  console.log(i)
}
// 1
// 2
// 3
```

## 2. [debounce](./src/02_debounce.js)

write a simple debounce function

> Lodash.\_deboune() Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked.
