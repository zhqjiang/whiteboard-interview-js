const deepFlatten = (arr) =>
  [].concat(...arr.map((ele) => (Array.isArray(ele) ? deepFlatten(ele) : ele)))

let values = [3, [2, 5], [7, [10, 11]]]
console.log(deepFlatten(values)) // [3, 2, 5, 7, 10, 11]
