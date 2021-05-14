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

## 3. throttle

write a simple throttle function

> Creates a throttled function that only invokes func at most once per every wait milliseconds.

3.1. [throttle using timestamp](./src/03_throttle_timestamp.js)

3.2. [throttle using setTimeout](./src/03_throttle_timeout.js)

## 4. inheritance

4.1 [prototype chaining](./src/04_prototype_chaining.js)

4.2 [constructor stealing](./src/04_constructor_stealing.js)

4.3 [combination inheritance](./src/04_combination_inheritance.js)

4.4 [parastitic combination inheritance](./src/04_parastitic_combination_inheritance.js)

4.5 [class inheritance](./src/04_class_inheritance.js)

## 5. remove duplicate elements of an array

5.1 [es6](./src/05_dedup_es6.js)

5.2 [es5](./src/05_dedup_es5.js)

## 6. [flaten array](./src/06_flatten_array.js)

## 7. [shallowCopy](./src/07_shallow_copy.js)

implement a function like Object.assign(target, source)

## 8. [deepClone](./src/08_deep_clone.js)

don't use `JSON.stringify`

## 9. [eventEmitter](./src/09_event_emitter.js)

## 10. [image lazy loading](./src/10_img_lay_loading.js)

## 11. [curry](./src/11_curry.js)

```js
const curry = function () {
  //write your code
}

curry(Math.pow)(2)(10) // 1024
curry(Math.min, 3)(10)(50)(2) // 2
```

## 12. [partial](./src/12_partial.js)

```js
const partial = function () {
  // write your code
}
const add = (a, b, c, d) => a + b + c + d
const addTwoFirstly = partial(add, 1, 2)
console.log(addTwoFirstly(3, 4)) // 10
```

## 13. [AJAX](./src/13_ajax.js)

write a simple ajax function using XMLHttpRequest

## 14. [promisification](./src/14_promisify.js)

```js
function loadScript(src, callback) {
  let script = document.createElement('script')
  script.src = src

  script.onload = () => callback(null, script)
  script.onerror = () => callback(new Error(`Script load error for ${src}`))

  document.head.append(script)
}

function promisify(f) {
  // write your code
}

// usage
let loadScriptPromise = promisify(loadScript)
loadScriptPromise('./src/index.js').then(
  (result) => console.log('ok'),
  (error) => console.log(error)
)
```

## 15. quicksort

https://en.wikipedia.org/wiki/Quicksort

15.1 [lomuto_partition](./src/15_quicksort_lomuto_partition.js)

15.1 [hoare_partition](./src/15_quicksort_hoare_partition.js)

## 16. mergesort

https://en.wikipedia.org/wiki/Merge_sort

16.1 [top_down](./src/16_mergesort_top_down.js)

16.2 [bottom_up](./src/16_mergesort_bottom_up.js)

## 17. [shellsort](./src/17_shellsort.js)

https://en.wikipedia.org/wiki/Shellsort

## 18. [network request](./src/18_xhr.js)

use promise, set type of response to json


