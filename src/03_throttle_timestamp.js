// simple version
const throttle = (fn, threshhold) => {
  let previous = 0

  return function (...args) {
    let now = new Date().getTime()
    if (now - previous > threshhold) {
      fn.apply(this, args)
      previous = now
    }
  }
}
