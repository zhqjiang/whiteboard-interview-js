const curry = (fn, arity = fn.length, ...args) => {
  console.log(arity, args)
  if (args.length >= arity) {
    return fn(...args)
  } else {
    return curry.bind(null, fn, arity, ...args)
    // why use bind here?
    // can we just repalce it with
    // return curry(fn, arity, ...args)
    // ?
  }
}

console.log(curry(Math.pow)(2)(10)) // 1024
console.log(curry(Math.min, 3)(10)(50)(2)) // 2

function add(a, b, c, d) {
  return a + b + c
}
console.log(curry(add)(3, 1, 2)(4)) // 10
