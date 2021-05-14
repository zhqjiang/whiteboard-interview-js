const debounce1 = (fn, ms = 0) => {
  let timeoutId
  return function () {
    let args = arguments
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

const debounce2 = (fn, ms = 0) => {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), ms)
  }
}

/**
 *
 * @param {Function} fn
 * @param {Number} ms
 * @param {Boolean} immediate
 * @returns
 */

const debounceEnhanced = (fn, ms = 0, immediate) => {
  let timeoutId

  const debounced = function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    if (immediate) {
      const callNow = !timeoutId
      timeoutId = setTimeout(() => {
        timeoutId = null
      }, ms)
      if (callNow) {
        fn.apply(this, args)
      }
    } else {
      timeoutId = setTimeout(() => {
        fn.apply(this, args)
      }, ms)
    }
  }

  debounced.cancel = function () {
    clearTimeout(timeoutId)
    timeoutId = null
  }

  return debounced
}
