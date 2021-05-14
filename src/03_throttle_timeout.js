const throttle = (fn, wait) => {
  let timer

  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, wait)
    }
  }
}

const throttle2 = (fn, wait) => {
  let previous = 0
  let timer, context, args

  const later = function () {
    previous = Number(new Date())
    timer = null
    fn.apply(context, args)
  }

  return function () {
    let now = Number(new Date())
    let remaining = wait - (now - previous)
    context = this
    args = arguments

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      previous = now
      fn.apply(context, args)
    } else if (!timer) {
      timer = setTimeout(later, wait)
    }
  }
}
